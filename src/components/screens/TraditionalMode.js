import React, { useState } from "react";
import Question from "../Question";
import { useFetchQuestions } from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const TraditionalMode = () => {
  const { amount, difficulty, category } = useSelector((state) => state.game);
  console.log(amount, difficulty, category);
  const { results } = useFetchQuestions(amount, difficulty, category);
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);

  const getPoints = (correct, idx) => {
    if (correct) {
      setPoints(points + 1);
    } else {
      setErrors(errors + 1);
    }
  };

  if (results.length === 0) {
    return <h1>Espere...</h1>;
  }

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

      {points + errors === 10 && (
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Results</h5>

            <p>Correct: {points}</p>
            <p>Incorrect: {errors}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraditionalMode;
