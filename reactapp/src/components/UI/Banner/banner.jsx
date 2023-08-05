import React, { useState } from 'react';
import Card_1 from '../Card/card_1';
import Card_2 from '../Card/card_2';
import Card_3 from '../Card/card_3';
import Card_4 from '../Card/card_4';
import Card_5 from '../Card/card_5';
import './banner.css';

function Banner() {
  const [start, setIsStart] = useState(false);

  const handleStartClick = () => {
    if(start === false) {
      setIsStart(true);
    }
  }
  const renderBanner = () => {
    return(
      <div>
        <h1 className='bannerHead'>Quizz App</h1>
        <button onClick={handleStartClick} className='bannerButton'>Start Quiz</button>
      </div>
    );
  }
  const renderCards = () => {
    return(
      <>
        <h1 className='bannerHead'>Quizz App</h1>
        <div className='cardTop_1'><Card_1/></div>
        <div className='cardTop_2'><Card_2/></div>
        <div className='cardBottom_1'><Card_3/></div>
        <div className='cardBottom_2'><Card_4/></div>
        <div className='cardBottom_3'><Card_5/></div>
      </>
    );
  }

  return (
    <div>
      {start ? renderCards() : renderBanner()}
    </div>
  );
}

export default Banner;