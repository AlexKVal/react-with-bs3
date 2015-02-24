define(function (require, exports, module) {
  var React = require('react');

  module.exports = React.createClass({displayName: "ProductRow",
    render: function() {
      var name = this.props.product.stocked ?
        this.props.product.name :
        <span style={{color: 'darkorange'}}>
          {this.props.product.name}
        </span>;

      return (
        <tr>
          <td>{name}</td>
          <td><span className="pull-right">{this.props.product.price}</span></td>
        </tr>
      );
    }
  });

});
