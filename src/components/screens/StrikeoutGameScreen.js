import React, { useState, useEffect } from "react";
import { useFetchQuestions } from "../../hooks/useFetch";
import Question from "../Question";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  saveGameResultsToDB,
  saveGameResultsToGeneralStats,
} from "../../redux/actions/gameActions";
import Loading from "../Loading";

const StrikeoutGameScreen = () => {
  const { category, difficulty, amount, active } = useSelector(
    (state) => state.game,
  );
  const { logged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(category, difficulty, amount);

  const { results } = useFetchQuestions(amount, difficulty, category);

  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);
  const [hits, setHits] = useState(0);
  const [qnum, setQnum] = useState(0);
  const [next, setNext] = useState(true);

  useEffect(() => {
    if ((errors === 3 || qnum >= amount) && logged) {
      dispatch(saveGameResultsToDB(hits, errors, points, "strikeout"));
      dispatch(
        saveGameResultsToGeneralStats(hits, errors, points, "strikeout-mode"),
      );
    }
  }, [hits, errors, points, qnum, amount, dispatch, logged]);

  const getPoints = (correct, difficulty) => {
    if (correct) {
      setHits(hits + 1);

      switch (difficulty) {
        case "easy":
          setPoints(points + 1);
          break;
        case "medium":
          setPoints(points + 3);
          break;
        case "hard":
          setPoints(points + 5);
          break;

        default:
          setPoints(points + 1);
      }
    } else {
      setErrors(errors + 1);
    }

    setNext(false);
  };

  const handleNextQuestion = () => {
    setQnum(qnum + 1);
    setNext(true);
  };

  if (!active) {
    history.replace("/strikeout");
  }

  if (results.length === 0) {
    return <Loading />;
  }

  return (
    <div>
      <div className='row justify-content-center mt-3'>
        {qnum >= amount && (
          <div className='col-sm-10 col-lg-6'>
            {/* Aqui va el card de ganaste la partida */}
            <div className='card'>
              <div className='card-header'>
                You have reached the end of the 50 questions
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
          <div className='col-sm-10 col-lg-6 '>
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
          <div className='col-sm-12 col-lg-6'>
            <Question
              trivia={results[qnum]}
              idx={qnum + 1}
              getPoints={getPoints}
              jeopardy={false}
            />
          </div>
        )}
      </div>

      {qnum < amount && errors < 3 && (
        <div className='row justify-content-center'>
          <div className='col-sm-10 col-lg-6'>
            <button
              className='btn btn-info'
              disabled={next}
              onClick={handleNextQuestion}>
              {qnum === amount - 1 ? "Results" : "Next Question"}
            </button>
          </div>
        </div>
      )}

      <div className='row justify-content-center mt-5 mb-5'>
        <div className='col-sm-6 col-lg-4'>
          <div className='card'>
            <div className='card-body out-container'>
              <div className={errors < 1 ? "out-placeholder" : "out"}>1</div>
              <div className={errors < 2 ? "out-placeholder" : "out"}>2</div>
              <div className={errors < 3 ? "out-placeholder" : "out"}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrikeoutGameScreen;
