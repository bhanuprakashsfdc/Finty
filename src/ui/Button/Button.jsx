import React from 'react';
import './Button.css'; // Importing the CSS file for styling

const Button = ({ text, onClick, type = 'button', className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
