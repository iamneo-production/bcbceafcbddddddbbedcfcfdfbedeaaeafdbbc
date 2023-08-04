import React from 'react';
import './InputStyles.css'
const Input = ({ question, options, selected, onChange }) => {
  return (
    <div className="input-container">
      <h3>{question}</h3>
      {options.map((option) => (
        <p  key={option} className={selected === option ? "selected" : ""} onClick={() => onChange(question, option)}>
          {option}
        </p>
      ))}
    </div>
  );
};

export default Input;
