import React, { useState } from "react";
import Question from "../Question";
import { useFetchQuestions } from "../../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  saveGameResultsToDB,
  saveGameResultsToGeneralStats,
} from "../../redux/actions/gameActions";
import { useEffect } from "react";
import Loading from "../Loading";

const TraditionalMode = () => {
  const { amount, difficulty, category, active } = useSelector(
    (state) => state.game,
  );
  const { logged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(amount, difficulty, category);
  const { results } = useFetchQuestions(
    amount,
    difficulty,
    category,
    "traditional",
  );
  const [points, setPoints] = useState(0);
  const [hits, setHits] = useState(0);
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if ((hits + errors).toString() === amount && logged) {
      dispatch(saveGameResultsToDB(hits, errors, points, "traditional"));
      dispatch(
        saveGameResultsToGeneralStats(hits, errors, points, "traditional-mode"),
      );
    }
  }, [hits, errors, points, amount, dispatch, logged]);

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
  };

  if (!active) {
    history.replace("/traditional");
  }

  if (results.length === 0) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <h1>Traditional Trivia</h1>
      <div className='row'>
        {results.map((trivia, idx) => (
          <div key={trivia.question} className='col-sm-12 col-lg-6'>
            <Question
              trivia={trivia}
              idx={idx + 1}
              getPoints={getPoints}
              jeopardy={false}
            />
          </div>
        ))}
      </div>

      {(hits + errors).toString() === amount && (
        <div className='row justify-content-md-center mb-5'>
          <div className='col-sm-12 col-lg-6'>
            {/* Aqui va el card de ganaste la partida */}
            <div className='card'>
              <div className='card-header'>Thanks for playing!</div>
              <div className='card-body'>
                <h5 className='card-title'>Your Results:</h5>
                <p className='card-text'> Correct Anwsers: {hits} </p>
                <p className='card-text'> Incorrect Anwsers: {errors} </p>
                <b>
                  <h6 className='card-text'> Total Points: {points} </h6>
                </b>

                <Link to='/traditional' className='btn btn-primary mt-5'>
                  Play Again
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TraditionalMode;
