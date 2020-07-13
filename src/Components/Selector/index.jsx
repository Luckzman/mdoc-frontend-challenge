import React from 'react';
import PropTypes from 'prop-types';
import './Selector.scss';

const Selector = ({ item, isFilter, handleItem, isActive, index }) => {
  return (
    <div className={`AmountSelector ${!isFilter ? 'not-filter' : ''} ${isActive ? 'active-selector' : ''}`} onClick={() => handleItem(item, index)}>
      {isFilter ? item : `$${item}.00`}
    </div>
  )
}

Selector.propTypes = {
  isFilter: PropTypes.bool,
  item: PropTypes.number,
  handleItem: PropTypes.func,
  isActive: PropTypes.bool,
  index: PropTypes.number
};

export default Selector;
