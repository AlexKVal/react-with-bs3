define(function (require, exports, module) {
  var React = require('react');
  var Table = require('react-bootstrap').Table;
  var ProductCategoryRow = require('./ProductCategoryRow');
  var ProductRow = require('./ProductRow');

  module.exports = React.createClass({displayName: "ProductTable",
    render: function() {
      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function(product) {
        if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
          return;
        }

        if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      }.bind(this));

      return (
        <Table striped hover>
          <thead>
            <tr><th>Name</th><th><span className="pull-right">Price</span></th></tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      );
    }
  });
});
