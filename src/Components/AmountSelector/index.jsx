import React from 'react';
import PropTypes from 'prop-types';
import './AmountSelector.scss';

const AmountSelector = ({ amount, isFilter, handleAmount, isActive, index }) => {
  return (
    <div className={`AmountSelector ${!isFilter ? 'not-filter' : ''} ${isActive ? 'active-selector' : ''}`} onClick={() => handleAmount(amount, index)}>
      {isFilter ? amount : `$${amount}.00`}
    </div>
  )
}

AmountSelector.propTypes = {
  isFilter: PropTypes.bool,
  amount: PropTypes.number,
  handleAmount: PropTypes.func,
  isActive: PropTypes.bool,
  index: PropTypes.number
};

export default AmountSelector;
