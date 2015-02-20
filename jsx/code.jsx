var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var Well = ReactBootstrap.Well;
var Table = ReactBootstrap.Table;
var Input = ReactBootstrap.Input;

var FilterableProductTable = React.createClass({
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

var DataListInput = React.createClass({
  propTypes: {
    dataListID: React.PropTypes.string.isRequired,
    optionsList: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      dataListID: 'dataListInput',
      optionsList: []
    };
  },
  getTextValue: function() {
    return this.refs.textInput.getDOMNode().value;
  },
  render: function() {
    var options = this.props.optionsList.map(function(option, index) {
      return ( <option key={'key-'+index} value={option} /> );
    });

    return (
    <div className="dataListInput">
      <input
        list={this.props.dataListID}
        placeholder={this.props.placeholder}
        className="form-control"
        ref="textInput"
        defaultValue={this.props.inputText}
        onChange={this.props.onChange}
      />
      <datalist id={this.props.dataListID}>
        {options}
      </datalist>
    </div>
    );
  }
});

var SearchBar = React.createClass({
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

var ProductTable = React.createClass({
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

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th className="bg-warning text-center" colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
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

React.render(
  <FilterableProductTable products={data} />,
  document.body
);
