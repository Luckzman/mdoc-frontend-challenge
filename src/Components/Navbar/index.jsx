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
            <li>Resource</li>
          </ul>
          <ul className="right-nav">
            <li>Register</li>
            <li>Login</li>
            <li>
              <input type="text" placeholder="Search" />
              <SearchIcon className="search-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
