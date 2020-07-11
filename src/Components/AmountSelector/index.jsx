import React from 'react';
import PropTypes from 'prop-types';
import './AmountSelector.scss';

const AmountSelector = ({ amount, handleAmount, isActive, index }) => {
  return (
    <div className={`AmountSelector ${isActive ? 'active-selector' : ''}`} onClick={() => handleAmount(amount, index)}>
      {`$${amount}.00`}
    </div>
  )
}

AmountSelector.propTypes = {
  amount: PropTypes.number,
  handleAmount: PropTypes.func,
  isActive: PropTypes.bool,
};

export default AmountSelector;
