import React, { useState } from "react";
import questions from "../../../functions/quiz";
import './button.css';

function Button_4() {
  const [selected, setIsSelected] = useState(false);
  
  const handleOptionClick = () => {
    if(selected === false) {
      setIsSelected(true);
    }
  }
  return(
    <div className="buttonContainer">
      <button onClick={handleOptionClick} disabled={selected === true} className="buttonOption">{questions[3].option[0]}</button>
      <button onClick={handleOptionClick} disabled={selected === true} className="buttonOption">{questions[3].option[1]}</button>
      <button onClick={handleOptionClick} disabled={selected === true} className="buttonOption">{questions[3].option[2]}</button>
      <button onClick={handleOptionClick} disabled={selected === true} className="buttonOption">{questions[3].option[3]}</button>
    </div>
  );
}

export default Button_4;