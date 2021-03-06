import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Image1 } from '../../../Assets/Group 16.svg';

import './DonationSection.scss';

const DonationSection = () => {
  return (
    <div className="DonationSection">
      <div className="container">
        <div className="donation">
          <div className="img-container">
            <Image1 className="image1" />
          </div>
          <div className="donation-text">
            <h2>Stating help people fighting Corona</h2>
            <p>The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.</p>
            <div className="donation-btn">
              <Link className="button" to="/donate">Donate Now</Link>
              <Link className="button extra" to="/help-covid">Learn About COVID-19</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSection;
