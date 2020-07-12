import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <div className="Card">
      <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594579353/mDoc/mdoc_image/covid-response/covid%20response/Mask_Group_12.png" alt="" />
      <div className="content">
        <p>Webinar</p>
        <h5>Health System</h5>
        <p>Intermountain Healthcare: Optimizing the Provider-Patient Digital Experience Through Telehealth Interoperability</p>
      </div>
    </div>
  )
}

export default Card;
