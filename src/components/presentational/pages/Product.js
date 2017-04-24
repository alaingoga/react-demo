import React from 'react';
import PropTypes from 'prop-types';
import Shell from '../../containers/Shell';
import ProductDetails from '../elements/ProductDetails';

/**
 * Specific product view
 */
const Product = (props) => {
  // Id is been passed by router
  const id = props.match.params.id;
  // Product is a property of router
  const prods = props.prods;
  // Matching the product id on main products array
  const matchProd = Shell.findItem(id, 'id', prods);
  return (
    <div>
      { matchProd &&
      <ProductDetails product={matchProd} />
      }
    </div>
  );
};

Product.propTypes = {
  match: PropTypes.object,
  prods: PropTypes.array
};

export default Product;
