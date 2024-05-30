import React from 'react';
import PropTypes from 'prop-types';
import { buttonStyle } from './constant';

const CustomButton = ({ type, label, onClick }) => {
  
  const className = buttonStyle[type];
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;

