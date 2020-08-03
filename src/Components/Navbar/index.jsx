import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../Assets/search-solid.svg';
import { ReactComponent as HamBurgerIcon } from '../../Assets/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../../Assets/times-solid.svg';
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

const NavItem = ({ item, path, color, isActive, isScrolling, handleClick, index }) => {
  return (
    <Link className={`link ${isActive ? 'active' : ''} ${isScrolling ? 'inverse' : ''} ${color ? 'nav-color' : ''}`} to={path} onClick={() => handleClick(item, index)} >{item}</Link>
  );
}

const Navbar = () => {
  const [index, setIndex] = useState(-1);
  const [navColor, setNavColor] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = (item, index) => {
    setIndex(index);
    if (index === 7) setNavColor(true);
    else setNavColor(false)
  }

  const toggleNavItems = () => {
    setIsNavOpen(!isNavOpen);
  }

  const onNav = useRef();

  const navObserver = (node) => {
    new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          console.log(true, 'intesecting');
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      })
    }).observe(node)
  }

  useEffect(() => {
    if (onNav.current) {
      navObserver(onNav.current);
    }
  }, [])
  return (
    <>
      <div className="hidden-navbar">
        <div ref={onNav} className="hidden-navbar__nav"></div>
      </div>
      <div className={`navbar ${isScrolling ? 'bgwhite' : ''}`}>
        <div className="container">
          <div className={`nav-items`}>
            <div className="brand">
              <Link to="/">
                <Logo className="logo" />
              </Link>
            </div>
            <div className={`nav  ${isNavOpen ? 'hide-navitem' : ''}`}>
              <ul className="left-nav">
                {items.map((item, i) => {
                  console.log(navColor);
                  if (i === 7) return <NavItem key={`a${i}`} isScrolling={isScrolling} index={i} item={item.name} path={item.path} handleClick={handleClick} isActive={index === i} />
                  else return <NavItem key={`a${i}`} color={navColor} isScrolling={isScrolling} index={i} item={item.name} path={item.path} handleClick={handleClick} isActive={index === i} />
                })}
              </ul>
              <ul className="right-nav">
                <li className={`${isScrolling ? 'inverse' : ''} ${navColor ? 'nav-color' : ''}`}>Register</li>
                <li className={`${isScrolling ? 'inverse' : ''} ${navColor ? 'nav-color' : ''}`}>Login</li>
                <li onClick={() => { setNavColor(true) }}>
                  <input type="text" className={`${isScrolling ? 'inverse' : ''} ${navColor ? 'nav-color' : ''}`} placeholder="Search" />
                  <Link to="/resource-list" className={`${navColor ? 'nav-color' : ''}`}><SearchIcon className={`search-icon ${isScrolling ? 'inverse' : ''} ${navColor ? 'nav-color' : ''}`} /></Link>
                </li>
              </ul>
            </div>
          </div>
          {isNavOpen ? <HamBurgerIcon className="hamburger-icon" onClick={toggleNavItems} />
            : <CloseIcon className="hamburger-icon" onClick={toggleNavItems} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
