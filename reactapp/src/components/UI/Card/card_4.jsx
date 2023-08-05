import React from "react";
import questions from '../../../functions/quiz'
import Button_4 from "../Button/button_4";
function Card_4() {
  return(
    <div>
      <p>{questions[3].question}</p>
      <Button_4></Button_4>
    </div>
  );
}

export default Card_4;