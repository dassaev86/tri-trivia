import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { randomizeCategories } from "../helpers/randomizeAnswers";
import { useDispatch } from "react-redux";
import {
  setRandomCategories,
  setScore,
  setActive,
} from "../../redux/actions/jeopardyActions";

const JeopardyScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const categoryNumbers = randomizeCategories();
    dispatch(setRandomCategories(categoryNumbers));
    dispatch(setActive(true));
    dispatch(
      setScore({
        hits: 0,
        errors: 0,
        points: 0,
      }),
    );
  }, [dispatch]);

  return (
    <div>
      <div className='row justify-content-center mt-2'>
        <div className='col-sm-10 col-lg-8'>
          <div className='jumbotron'>
            <div className='container'>
              <h1>Jeopardy Screen</h1>
              <h5 className='display-6 mt-5'>How to Play</h5>
              <p className='lead text-justify'>
                In jeopardy mode you will have a selection of 5 topics with 5
                questions per topic. Each question has a value of 100 to 500. If
                you answer correctly you earn the indicated points, otherwise
                you lose that same amount. Try to get the maximum amount of
                points.
              </p>

              <p className='lead mt-5'>Good Luck!</p>

              <div className='row justify-content-center'>
                <div className='col-sm-4'>
                  <div className='input-group mb-3'></div>
                </div>
              </div>

              <div className='row justify-content-center'>
                <div className='col-6'>
                  <Link
                    to='jeopardy/game'
                    className='btn btn-block btn-primary'>
                    Start Game
                  </Link>

                  <Link to='/' className='btn btn-block btn-secondary'>
                    Main Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeopardyScreen;
