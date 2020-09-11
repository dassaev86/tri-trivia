import React, { useState, useEffect } from "react";
import { randomizeAnswers } from "./helpers/randomizeAnswers";

const Question = ({ trivia, idx, getPoints, value, jeopardy }) => {
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const [correctResponse, setCorrectResponse] = useState(0);
  const [randomAnswers, setRandomAnswers] = useState([]);

  useEffect(() => {
    setAlreadyAnswered(false);
    setCorrectResponse(0);
  }, [idx]);

  useEffect(() => {
    const decodedCorrectAnswer = window.atob(trivia.correct_answer);
    const decodedIncorrectAnsers = [];

    trivia.incorrect_answers.forEach((incorrect) => {
      decodedIncorrectAnsers.push(window.atob(incorrect));
    });

    const randomizeResp = randomizeAnswers(
      decodedCorrectAnswer,
      decodedIncorrectAnsers,
    );

    setRandomAnswers(randomizeResp);
  }, [trivia.correct_answer, trivia.incorrect_answers]);

  const handleAnswer = (answer) => {
    if (answer === window.atob(trivia.correct_answer)) {
      setCorrectResponse(1);
      getPoints(true, window.atob(trivia.difficulty), value);
    } else {
      setCorrectResponse(2);
      getPoints(false, window.atob(trivia.difficulty), value);
    }

    setAlreadyAnswered(true);
  };

  const getCategoryTitle = (category) => {
    let categoryTitle = category;
    const entertainment = category.includes("Entertainment:");
    const science = category.includes("Science:");

    if (entertainment) {
      categoryTitle = category.substring(15, 50);
    }

    if (science) {
      categoryTitle = category.substring(9, 50);
    }

    return categoryTitle;
  };

  return (
    <div className='col-sm-12 col-lg-12 mb-5 justify-content-center'>
      <div className='card'>
        <div className='card-body '>
          <h5 className='card-title'>
            {" "}
            {jeopardy
              ? `${getCategoryTitle(window.atob(trivia.category))} ${idx}`
              : `Question ${idx}`}{" "}
          </h5>
          <p className='card-text'>{window.atob(trivia.question)}</p>

          {window.atob(trivia.difficulty) === "easy" && !jeopardy && (
            <span className='badge badge-success'>EASY</span>
          )}
          {window.atob(trivia.difficulty) === "medium" && !jeopardy && (
            <span className='badge badge-warning'>NORMAL</span>
          )}
          {window.atob(trivia.difficulty) === "hard" && !jeopardy && (
            <span className='badge badge-danger'>HARD</span>
          )}
        </div>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <button
              className={
                randomAnswers[0] === window.atob(trivia.correct_answer) &&
                alreadyAnswered
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
                randomAnswers[1] === window.atob(trivia.correct_answer) &&
                alreadyAnswered
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
                randomAnswers[2] === window.atob(trivia.correct_answer) &&
                alreadyAnswered
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
                randomAnswers[3] === window.atob(trivia.correct_answer) &&
                alreadyAnswered
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
