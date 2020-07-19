import React from 'react';

import './Banner.scss';

const Banner = () => {
  return (
    <div className="Banner" >
      <div className="container">
        <h1 className="highlight-text">Your Health in Your Hands.</h1>
        <h1 className="highlight-text secondary">Anytime. Anywhere.</h1>
        <button>Get Started</button>
      </div>
    </div >
  );
}

export default Banner;
