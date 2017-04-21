import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const imagePath = '/images/products/';
  const product = props.product;
  const techSpecs = props.product.techspecs;
  return (
    <article className="product">
      <div className="row">
        {product.image &&
        <div className="col-md-8">
          <img src={`${imagePath}${product.image}`} className="product-image" alt={product.name} />
        </div>
        }
        <div className="col-md-4">
          {product.price ?
            <div className="row price-cont">
              <div className="col price">{product.price}</div>
              <div className="col"><button className="button-buy">Order</button></div>
            </div> :
            <div className="price-cont">
              <div className="col price">Out Of Stock</div>
            </div>
          }
          {techSpecs &&
          <aside className="card-cont">
            <h2 className="card-main-headline">{product.name}</h2>
            <span className="card-brand">{product.manufacturer}</span>

            <h3 className="card-headline">Technical Specs</h3>
            <div className="row label-cont">
              <div className="col">Length</div>
              <div className="col label-value">{techSpecs.length}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Max Acceleration</div>
              <div className="col label-value">{techSpecs.maxaccel}</div>
            </div>
            <div className="row label-cont">
              <div className="col">MGLT</div>
              <div className="col label-value">{techSpecs.MGLT}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Max. Atmospheric Speed</div>
              <div className="col label-value">{techSpecs.maxatmosphericspeed}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Hull</div>
              <div className="col label-value">{techSpecs.hull}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Sensor</div>
              <div className="col label-value">{techSpecs.sensor}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Targeting</div>
              <div className="col label-value">{techSpecs.targeting}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Armament</div>
              <div className="col label-value">{techSpecs.armament}</div>
            </div>
            <div className="row label-cont">
              <div className="col">Communications</div>
              <div className="col label-value">{techSpecs.communications}</div>
            </div>
            <br />
            <span>Description</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse risus lorem, facilisis eget bibendum a, pulvinar non tellus.
              Pellentesque eu nisl vitae nibh scelerisque dignissim.
              Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.
            </p>
          </aside>
          }
        </div>
      </div>
    </article>
  );
};

Details.propTypes = {
  product: PropTypes.object
};

export default Details;
