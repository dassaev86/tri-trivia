import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gameSelectedOptions } from "../../redux/actions/gameActions";

const StrikeoutScreen = () => {
  const dispatch = useDispatch();
  const [difficultyValue, setDifficultyValue] = useState("easy");

  const handleDifficultyValueChange = (e) => {
    console.log(e.target.value);
    setDifficultyValue(e.target.value);
  };

  const handleSelectedOptions = () => {
    dispatch(gameSelectedOptions("", difficultyValue, "50", "strikeout", true));
  };

  return (
    <>
      <div className='row justify-content-center mt-2'>
        <div className='col-sm-10 col-lg-8'>
          <div className='jumbotron'>
            <div className='container'>
              <h1>Strikeout Mode</h1>
              <h5 className='display-6 mt-5'>How to Play</h5>
              <p className='lead text-justify'>
                In Strikeout mode, answer as many questions as you can before
                making 3 errors (outs). The maximum number of questions to
                answer is 50, will you be able to reach the end? The questions
                have different difficulties and a value according to the
                following table:
              </p>
              <p>
                <span className='badge badge-success mr-3'>EASY</span> 1 Point
              </p>
              <p>
                <span className='badge badge-warning mr-3'>NORMAL</span>3 Points
              </p>
              <p>
                <span className='badge badge-danger mr-3'>HARD</span>5 Points
              </p>

              <p className='lead mt-5'>Good Luck!</p>

              <div className='row justify-content-center'>
                <div className='col-sm-6'>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <label
                        className='input-group-text'
                        htmlFor='inputGroupSelect01'>
                        Select Difficulty
                      </label>
                    </div>
                    <select
                      value={difficultyValue}
                      className='custom-select'
                      id='inputGroupSelect01'
                      onChange={handleDifficultyValueChange}>
                      <option value='easy'>Easy</option>
                      <option value='medium'>Normal</option>
                      <option value='hard'>Hard</option>
                      <option value='all'>All</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='row justify-content-center'>
                <div className='col-6'>
                  <Link
                    to='strikeout/game'
                    className='btn btn-block btn-primary'
                    onClick={handleSelectedOptions}>
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
    </>
  );
};

export default StrikeoutScreen;
