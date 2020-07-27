import React, { useState, useEffect } from "react";
import { randomizeAnswers } from "./helpers/randomizeAnswers";

const Question = ({ trivia, idx, getPoints }) => {
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const [correctResponse, setCorrectResponse] = useState(0);
  const [randomAnswers, setRandomAnswers] = useState([]);

  useEffect(() => {
    const randomizeResp = randomizeAnswers(
      trivia.correct_answer,
      trivia.incorrect_answers,
    );

    setRandomAnswers(randomizeResp);
  }, [trivia.correct_answer, trivia.incorrect_answers]);

  const handleAnswer = (answer) => {
    if (answer === trivia.correct_answer) {
      setCorrectResponse(1);
      getPoints(true, idx);
    } else {
      setCorrectResponse(2);
      getPoints(false, idx);
    }

    setAlreadyAnswered(true);
  };

  return (
    <div
      className='col-sm-6 mb-5'
      style={{ justifyContent: "center", alignItems: "center" }}>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Question {idx + 1}</h5>
          <p className='card-text'>{trivia.question}</p>
        </div>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <button
              className={
                randomAnswers[0] === trivia.correct_answer && alreadyAnswered
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
              disabled={alreadyAnswered}
              onClick={(e) => handleAnswer(randomAnswers[0])}>
              {randomAnswers[0]}
            </button>
          </li>
          <li className='list-group-item'>
            <button
              className={
                randomAnswers[1] === trivia.correct_answer && alreadyAnswered
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
              disabled={alreadyAnswered}
              onClick={() => handleAnswer(randomAnswers[1])}>
              {randomAnswers[1]}
            </button>
          </li>
          <li className='list-group-item'>
            <button
              className={
                randomAnswers[2] === trivia.correct_answer && alreadyAnswered
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
              disabled={alreadyAnswered}
              onClick={() => handleAnswer(randomAnswers[2])}>
              {randomAnswers[2]}
            </button>
          </li>
          <li className='list-group-item'>
            <button
              className={
                randomAnswers[3] === trivia.correct_answer && alreadyAnswered
                  ? "btn btn-success"
                  : "btn btn-primary"
              }
              disabled={alreadyAnswered}
              onClick={() => handleAnswer(randomAnswers[3])}>
              {randomAnswers[3]}
            </button>
          </li>
          {correctResponse === 1 && (
            <li className='list-group-item'>
              <div className='alert alert-success' role='alert'>
                Correct Answer
              </div>
            </li>
          )}
          {correctResponse === 2 && (
            <li className='list-group-item'>
              <div className='alert alert-danger' role='alert'>
                Wrong Answer
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Question;
