define(function (require, exports, module) {
  var React = require('react');
  var Well = require('react-bootstrap').Well;
  var ProductTable = require('./ProductTable');
  var SearchBar = require('./SearchBar');

  module.exports = React.createClass({
    getInitialState: function() {
      return {
        filterText: '',
        inStockOnly: false
      };
    },

    filterCallback: function(filterText, inStockOnly) {
      this.setState({
        filterText: filterText,
        inStockOnly: inStockOnly
      });
    },

    render: function() {
      var wellStyles = { margin: 10, width: 270 };
      return (
        <Well className='main-content' style={wellStyles}>
          <SearchBar optionsList={this.props.products.map(function(p){return p.name;})}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            filterCallback={this.filterCallback}
          />
          <ProductTable products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </Well>
      );
    }
  });

});
