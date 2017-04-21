import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const imagePath = '/images/products/';
  const product = props.product;
  return (
    <article key={product.id} className="col-md-3">
      <div className="card-cont text-center">
        {product.id &&
        <a href={`/product/${product.id}`}>
          <button className="button-cust">Customize</button>
          {product.image &&
            <div className="card-image-wrapper">
              <img src={`${imagePath}${product.image}`} alt={product.name} className="card-image" />
            </div>
          }
          <span className="card-brand">{product.manufacturer}</span>
          <h2 className="card-headline">{product.name}</h2>
        </a>
      }
      </div>
    </article>
  );
};

Card.propTypes = {
  product: PropTypes.object
};

export default Card;
