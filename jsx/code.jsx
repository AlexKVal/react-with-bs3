var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

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
    return (
      <div className="row">
        <SearchBar optionsList={this.props.products.map(function(p){return p.name;})}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          filterCallback={this.filterCallback}
        />
        <ProductTable products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
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
      optionsList: [],
      inputText: ''
    };
  },
  onChange: function(e) {
    this.value = e.target.value;
    this.props.onChange(e.target.value);
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
        value={this.props.inputText}
        onChange={this.onChange}
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
      this.refs.dataListInput.value,
      this.refs.checkInput.getDOMNode().checked
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

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                checked={this.props.inStockOnly}
                ref="checkInput"
                onChange={this.onInputsChanges}
              /> Only show products in stock
            </label>
          </div>

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
      <table className="table table-striped table-hover">
        <thead>
          <tr><th>Name</th><th><span className="pull-right">Price</span></th></tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
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
  document.getElementById('content')
);
