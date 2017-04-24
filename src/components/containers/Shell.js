import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import axios from 'axios';
import Header from './../presentational/elements/Header';
import Product from '../presentational/pages/Product';
import List from '../presentational/pages/List';
import Spinner from './../presentational/elements/Spinner';

/**
 * Container component to fetch apis and resolve routers
 */
export default class Shell extends Component {

  // Helper to find object by key in array
  static findItem(item, key, arr) {
    const matchItem = arr.filter((el) => {
      return el[key] === item;
    });
    if (matchItem.length > 0) {
      return matchItem[0];
    }
    return null;
  }

  constructor(props) {
    super(props);
    // Using products array as state changer
    this.state = {
      products: []
    };
  }

  // Fetching API's and extending the main product objects
  componentDidMount() {
    const that = this;
    axios.all([
      axios.get('http://demo7475333.mockable.io/spaceships'),
      // A new local json is called to include additional product information like
      // id, images
      axios.get('/mocks/extras.json')
    ]).then(axios.spread((demo, extras) => {
      if (typeof demo !== 'undefined' &&
          typeof demo.data !== 'undefined' &&
          typeof demo.data.products !== 'undefined' &&
          demo.data.products.length > 0 &&
          typeof extras !== 'undefined') {
        const fullProducts = that.enhanceProduct(demo.data.products, extras.data.products);
        that.setState({ products: fullProducts });
      }
    }));
  }

  // Includes additional properties like id or images to the main products object
  enhanceProduct(products, extras) {
    products.map((prod) => {
      const extra = this.constructor.findItem(prod.name.replace(/\s+/g, '-').toLowerCase(), 'id', extras);
      if (extra !== null) {
        return Object.assign(prod, extra);
      }
      return prod;
    });
    return products;
  }

  render() {
    return (
      <div>
        {
          this.state.products.length === 0 ?
            <Spinner /> :
            <Router history={browserHistory}>
              <Route
                path="/"
                component={Header}
              >
                <IndexRoute
                  prods={this.state.products}
                  component={List}
                />
                <Route
                  path="/product/:id"
                  prods={this.state.products}
                  component={Product}
                />
              </Route>
            </Router>
        }
      </div>
    );
  }
}

Shell.propTypes = {
  children: PropTypes.node
};
