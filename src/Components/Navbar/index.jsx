import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../Assets/Icon-map-search.svg';
import './Navbar.scss';

const items = [
  { name: 'About Us', path: '' },
  { name: 'How it Works', path: '' },
  { name: 'MQN', path: '' },
  { name: 'Team', path: '' },
  { name: 'Contact', path: '' },
  { name: 'Blog', path: '' },
  { name: 'Careers', path: '' },
  { name: 'Resource', path: '/resource' },
];

const NavItem = ({ item, path, isActive, handleClick, index }) => {
  console.log(path, item)
  return (
    <Link className={`link ${isActive ? 'active' : ''}`} to={path} onClick={() => handleClick(item, index)} >{item}</Link>
  );
}

const Navbar = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (item, index) => {
    console.log(index, 'index')
    setIndex(index);
  }
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
            {items.map((item, i) => <NavItem key={`a${i}`} index={i} item={item.name} path={item.path} handleClick={handleClick} isActive={index === i} />)}
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
