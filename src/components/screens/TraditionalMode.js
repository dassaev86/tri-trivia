import React, { useState } from "react";
import Question from "../Question";
import { useFetchQuestions } from "../../hooks/useFetch";

const TraditionalMode = () => {
  const { results } = useFetchQuestions();
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);

  const getPoints = (correct, idx) => {
    console.log(correct);
    if (correct) {
      setPoints(points + 1);
    } else {
      setErrors(errors + 1);
    }
  };

  return (
    <div className='container'>
      <h1>Traditional Trivia</h1>
      <div className='row'>
        {results.map((trivia, idx) => (
          <Question
            key={trivia.question}
            trivia={trivia}
            idx={idx}
            getPoints={getPoints}
          />
        ))}
      </div>

      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Results</h5>

          <p>Correct: {points}</p>
          <p>Incorrect: {errors}</p>
        </div>
      </div>
    </div>
  );
};

export default TraditionalMode;
