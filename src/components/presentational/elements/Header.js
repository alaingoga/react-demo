import React from 'react';
import {
  Link
} from 'react-router-dom';

export default () => {
  return (
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
  );
};
