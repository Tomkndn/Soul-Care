import React, { useState } from 'react';
import '../Styles/Test.css';
import questions from '../Scripts/test.js';

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScores, setUserScores] = useState(Array(questions.length).fill(0)); // Initialize scores with zeros
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option when moving to the next question
    } else {
    //   // Calculate total score
    //   const totalScore = userScores.reduce((acc, score) => acc + parseInt(score), 0);
    //   setUserScores([...userScores,totalScore]); // Store the total score for display
    }
  };

  const handleOptionSelect = (optionIndex) => {
  const updatedScores = [...userScores]; // Create a copy of userScores array
  updatedScores[currentQuestionIndex] = optionIndex + 1; // Update the score for the current question
  setUserScores(updatedScores); // Update userScores state with the new array
  setSelectedOption(optionIndex); // Update selected option
};

let sumOfDigits = (str) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const digit = parseInt(str[i]);
      if (!isNaN(digit)) {
        sum += digit;
      }
    }
    return sum;
  };

  return (
    <div className='container-fluid d-flex align-items-center justify-content-center mb-5'>
      <div className='card card1 p-4'>
        <div className='d-flex align-items-center justify-content-center'><h1 className=''>Your Test</h1></div>
        <br/>
        {isLastQuestion ? (
          <div>
            <p>Your test is completed!</p>
            <p>Your score: {sumOfDigits(userScores)}</p>
          </div>
        ) : (
          <div>
            <div className='Ques_Head d-flex gap-2'>
              <p className='text-success'>Ques.</p>
              <p>{currentQuestion.question}</p>
              <p>?</p>
            </div>
            <form>
              {currentQuestion.options.map((option, index) => (
                <div className='d-flex align-items-center mt-2' key={index}>
                  <input 
                    id={`${index}ans`}
                    type='radio' 
                    name='ques'
                    checked={index === selectedOption} 
                    onChange={() => handleOptionSelect(index)}
                  />
                  <label for={`${index}ans`}>{Object.values(option)}</label> {/* Assuming options are objects with a single key-value pair */}
                </div>
              ))}
            </form>
            <div className='btn_div'>
              <button className='p-2 rounded-pill mt-5 btn_submit' onClick={handleNextClick}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
