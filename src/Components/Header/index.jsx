import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ name }) => {
  return (
    <div className="header">
      {name}
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Header;
