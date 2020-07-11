import React from 'react';

import './HowItWorks.scss';

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <div className="container">
        <h2 className="title">How mDoc Works</h2>
        <div className="section-container">
          <div className="sub-content">
            <h3 className="subtitle">mDoc makes it easier to live a
healthier, happier life.</h3>
            <p className="content">Managing an illness or a long-term disease such as Diabetes or Hypertension can be challenging especially when you are confronted with the realities of daily living in the African context. Using evidence-based person-centered approaches, mDoc has developed a platform of 24/7 support for you. From helping you keep a
secured centralized repository of your healthcare information, to connecting with different types of practitioners such as nutritionists and coaches to help with your health goals to helping you navigate where to find quality in-person healthcare we have got you covered.</p>
          </div>
          <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1594458957/mDoc/mdoc_image/mainimage.png" alt="how it works" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
