define(function (require, exports, module) {
  var React = require('react');

  module.exports = React.createClass({displayName: "ProductCategoryRow",
    render: function() {
      return (<tr><th className="bg-warning text-center" colSpan="2">{this.props.category}</th></tr>);
    }
  });
});
