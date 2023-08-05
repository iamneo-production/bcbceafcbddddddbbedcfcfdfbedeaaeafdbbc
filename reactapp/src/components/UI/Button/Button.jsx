import React from 'react';
import './ButtonStyles.css'
const Button = ({ onClick }) => {
  return (
    <div className="button-container">
      <button  onClick={onClick}>Show Result</button>
    </div>
  );
};

export default Button;