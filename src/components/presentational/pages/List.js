import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../elements/ProductCard';

/**
 * List of products view
 */
const List = (props) => {
  const prods = props.prods;
  return (
    <div className="row">
      {prods &&
      prods.map(prod => <ProductCard key={prod.id} product={prod} />)
      }
    </div>
  );
};

List.propTypes = {
  prods: PropTypes.array
};

export default List;
