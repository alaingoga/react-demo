import React from 'react';

export default () => {
  return (
    <header className="main">
      <div className="row justify-content-md-center">
        <div className="col col-md-1">
          <a href="/"><div className="logo" /></a>
        </div>
        <div className="col-12 col-md-auto">
          <h1 className="main-headline"><a href="/">{"Watto's Space Emporium"}</a></h1>
          <p className="main-description">The largest inventory of new and used vehicles</p>
        </div>
      </div>
    </header>
  );
};
