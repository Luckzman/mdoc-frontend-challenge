import React from 'react';
import { ReactComponent as Brand } from '../../../Assets/Group 8.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="upper-section">
          <div className="footer-brand">
            <Brand className="brand" />
          </div>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
          <ul className="middle">
            <li>Mission</li>
            <li>Vision</li>
            <li>Team</li>
          </ul>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="lower-footer">Copyright &#169; mDoc 2018 </div>
    </div>
  );
}

export default Footer;
