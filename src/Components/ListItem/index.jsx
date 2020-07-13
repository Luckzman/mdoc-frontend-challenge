import React from 'react';
import { Link } from 'react-router-dom';

import './ListItem.scss';

const ListItem = () => {
  return (
    <div className="ListItem">
      <Link to="/resource-details">
        <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591256/mDoc/mdoc_image/covid-response/Mask_Group_12.png" alt="" />
      </Link>
      <div className="text-content">
        <h3>Health System</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>
      </div>
      <div className="right-items">
        <div className="right-items__top">
          <h6>Market Verticals</h6>
          <p>Webinar</p>
        </div>
        <div className="social-icons-group">
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13117.svg" alt="" />
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13116.svg" alt="" />
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594591255/mDoc/mdoc_image/covid-response/Group_13115.svg" alt="" />
        </div>
      </div>
    </div>
  )
};

export default ListItem;
