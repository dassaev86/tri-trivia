import React, { useState } from "react";
import { useFetchQuestions } from "../../hooks/useFetch";
import Question from "../Question";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StrikeoutGameScreen = () => {
  const { category, difficulty, amount } = useSelector((state) => state.game);
  console.log(category, difficulty, amount);
  const { results } = useFetchQuestions(amount, difficulty, category);

  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);
  const [qnum, setQnum] = useState(0);
  const [next, setNext] = useState(true);

  const getPoints = (correct, idx) => {
    if (correct) {
      setPoints(points + 1);
    } else {
      setErrors(errors + 1);
    }

    setNext(false);
  };

  const handleNextQuestion = () => {
    setQnum(qnum + 1);
    setNext(true);
  };

  if (results.length === 0) {
    return <h1>Espere...</h1>;
  }

  console.log(qnum + " / " + amount);

  return (
    <div>
      <h1 className='mb-5'>Strikeout Game</h1>

      <div className='row justify-content-md-center'>
        {qnum >= amount && (
          <div className='col-6'>
            {/* Aqui va el card de ganaste la partida */}
            <div className='card'>
              <div className='card-header'>
                You have reached the end of the {amount} questions
              </div>
              <div className='card-body'>
                <h5 className='card-title'>You win with {points} points</h5>
                <p className='card-text'>
                  Thanks for playing! If you wish to give it another try, click
                  de button below.
                </p>
                <Link to='/strikeout' className='btn btn-primary'>
                  Play Again
                </Link>
              </div>
            </div>
          </div>
        )}

        {errors === 3 && (
          <div className='col-6'>
            {/* Aqui va el card de ganaste la partida */}
            <div className='card'>
              <div className='card-header'>
                You managed to reach question {qnum + 1}. Keep trying!
              </div>
              <div className='card-body'>
                <h5 className='card-title'>You obtained {points} points.</h5>
                <p className='card-text'>
                  Thanks for playing! If you wish to give it another try, click
                  de button below.
                </p>
                <Link to='/strikeout' className='btn btn-primary'>
                  Play Again
                </Link>
              </div>
            </div>
          </div>
        )}

        {qnum < amount && errors < 3 && (
          <Question trivia={results[qnum]} idx={qnum} getPoints={getPoints} />
        )}
      </div>

      {qnum < amount && errors < 3 && (
        <div className='row justify-content-md-center'>
          <button
            className='btn btn-info'
            disabled={next}
            onClick={handleNextQuestion}>
            {qnum === amount - 1 ? "Results" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StrikeoutGameScreen;
