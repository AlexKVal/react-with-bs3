define(function (require, exports, module) {
  var React = require('react');
  var Input = require('react-bootstrap').Input;
  var DataListInput = require('./DataListInput');

  module.exports = React.createClass({displayName: "SearchBar",
    onInputsChanges: function() {
      this.props.filterCallback(
        this.refs.dataListInput.getTextValue(),
        this.refs.checkInput.getChecked()
      );
    },
    render: function() {
      return (
        <div className="searchBar">
          <form>

            <DataListInput
              dataListID="productsDataList"
              optionsList={this.props.optionsList}
              inputText={this.props.filterText}
              placeholder="Search.."
              ref="dataListInput"
              onChange={this.onInputsChanges}
            />

            <Input
              type="checkbox"
              label="Only show products in stock"
              checked={this.props.inStockOnly}
              ref="checkInput"
              onChange={this.onInputsChanges}
            />

          </form>
        </div>
      );
    }
  });
});
