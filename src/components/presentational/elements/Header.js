import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <header className="main">
        <div className="row justify-content-md-center">
          <div className="col col-md-1">
            <Link to="/"><div className="logo" /></Link>
          </div>
          <div className="col-12 col-md-auto">
            <h1 className="main-headline"><Link to="/">{"Watto's Space Emporium"}</Link></h1>
            <p className="main-description">The largest inventory of new and used vehicles</p>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
