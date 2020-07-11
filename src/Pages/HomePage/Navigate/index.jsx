import React from 'react';
import { ReactComponent as LocationIcon } from '../../../Assets/Group 6.svg'

import './Navigate.scss';

const Navigate = () => {
  return (
    <div className="Navigate">
      <div className="container">
        <LocationIcon className="icon" />
        <h2 className="title">Simplification. Information. Access. Quality.
        We help you find quality healthcare services you need on our<span> NaviHealth</span> directory.</h2>
        <div className="content">
          <div className="left-content">
            <h4>We democratize
            healthcare information for
  the African user</h4>
            <p>We are building a geo-coded database of healthcare services across countries – whether it is diabetes care, family planning to cancer screening, we are here for you.</p>
            <p>Available on Google play</p>
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594423836/mDoc/mdoc_image/Image_3.png" alt="google play link" />
          </div>
          <div className="right-content">
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594423837/mDoc/mdoc_image/Image_2.png" alt="mDoc mobile view" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
