import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../Assets/Icon-map-search.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="brand">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="nav">
          <ul className="left-nav">
            <li>About Us</li>
            <li>How it Works</li>
            <li>MQN</li>
            <li>Team</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <Link className="link" to="resource">Resource</Link>
          </ul>
          <ul className="right-nav">
            <li>Register</li>
            <li>Login</li>
            <li>
              <input type="text" placeholder="Search" />
              <Link to="/resource-list"><SearchIcon className="search-icon" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
