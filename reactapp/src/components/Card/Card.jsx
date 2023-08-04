import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './CardStyles.css'
const Card = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({});

  const questions = [
    {
      question: 'Who is the father of our nation?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump', 'Barrack Obama'],
      answer: 'Mahatma Gandhi',
    },
    {
      question: 'What color is are the leaves?',
      options: ['Blue' ,'Red' ,'Yellow', 'Green'],
      answer: 'Green',
    },
    {
      question: 'What color is the sky?',
      options: ['Blue' ,'Red' ,'Yellow', 'Green'],
      answer: 'Blue',
    },
    {
      question: 'What color is the sky?',
      options: ['Blue' ,'Red' ,'Yellow', 'Green'],
      answer: 'Blue',
    },
    {
      question: 'What color is the fire?',
      options: ['Blue' ,'Red' ,'Yellow', 'Green'],
      answer: 'Red',
    },
  ];

  const handleOptionChange = (question, option) => {
    setSelected({
      ...selected,
      [question]: option,
    });
  };

  const handleShowResult = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (selected[q.question] === q.answer) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
  };

  return (
    <div className="card-container">
      <h1>Quiz App</h1>
      {questions.map((q) => (
        <Input key={q.question} question={q.question} options={q.options} selected={selected[q.question]} onChange={handleOptionChange} />
      ))}
      <Button onClick={handleShowResult} />
      {<h2 className='showResult'>You answered {score} / 5 correctly</h2>}
    </div>
  );
};

export default Card;
