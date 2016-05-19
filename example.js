superagent
  .get('https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&i mage_sizes[]=400&period_id=120')
  .end(function(err, res) {
    PRODUCTS.results = res.body.data;
    console.log('response: ', res.body.data);
     // render again - update the component props 
    ReactDOM.render(
      <ProductList results={PRODUCTS.results} />,
      document.getElementById('products')
    );
  });

superagent
  .get('https://api.gousto.co.uk/products/v2.0/categories')
  .end(function(err, res) {
    CATEGORIES.results = res.body.data;
    console.log('response: ', res.body.data);
     // render again - update the component props 
    ReactDOM.render(
      <CategoriesList results={CATEGORIES.results} />,
      document.getElementById('categories')
    );
  });

var PRODUCTS = {
  results: []
};

var CATEGORIES = {
  results: []
};

var ProductList = React.createClass({
  render: function() {
    var rows = this.props.results.map(function(data) {
      return (
          <div>
            <div key={data.title}>{data.title}</div>
            <div key={data.description}>{data.description}</div>
          </div>
      );
    });
    return (
      <div>{rows}</div>
    );
  }
});

var CategoriesList = React.createClass({
  render: function() {
    var rows = this.props.results.map(function(data) {
      return (
        <div key={data.title}>{data.title}</div>
      );
    });
    return (
      <div>{rows}</div>
    );
  }
});

ReactDOM.render(
  <ProductList products={PRODUCTS} />,
  document.getElementById('products')
);

ReactDOM.render(
  <CategoriesList categories={CATEGORIES} />,
  document.getElementById('categories')
);