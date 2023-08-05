import React from "react";
import questions from '../../../functions/quiz'
import Button_1 from "../Button/button_1";
function Card_1() {
  return(
    <div>
      <p>{questions[0].question}</p>
      <Button_1></Button_1>
    </div>
  );
}

export default Card_1;