import React, { useState } from "react";
import { categories } from "../helpers/categories";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { gameSelectedOptions } from "../../redux/actions/gameActions";

const TraditionalOptionsScreen = () => {
  const dispatch = useDispatch();
  const [categoryValue, setCategoryValue] = useState("");
  const [amountValue, setAmountValue] = useState("10");

  const handleCategoryValueChange = (e) => {
    console.log(e.target.value);
    setCategoryValue(e.target.value);
  };

  //   const handleDifficultyValueChange = (e) => {
  //     console.log(e.target.value);
  //     setDifficultyValue(e.target.value);
  //   };

  const handleAmountValueChange = (e) => {
    console.log(e.target.value);
    setAmountValue(e.target.value);
  };

  const handleSelectedOptions = () => {
    dispatch(
      gameSelectedOptions(
        categoryValue,
        "all",
        amountValue,
        "traditional",
        true,
      ),
    );
  };

  return (
    <>
      <h1>Traditional Mode</h1>

      <div className='row mt-5'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Select Category
              </label>
            </div>
            <select
              value={categoryValue}
              className='custom-select'
              id='inputGroupSelect01'
              onChange={handleCategoryValueChange}>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>

      {/* <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
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
        <div className='col-sm-4'></div>
      </div> */}

      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='inputGroupSelect01'>
                Questions Amount
              </label>
            </div>
            <select
              value={amountValue}
              className='custom-select'
              id='inputGroupSelect01'
              onChange={handleAmountValueChange}>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
            </select>
          </div>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <Link
            to='traditional/game'
            className='btn btn-block btn-primary'
            onClick={handleSelectedOptions}>
            Start Game
          </Link>

          <Link to='/' className='btn btn-block btn-secondary'>
            Main Menu
          </Link>
        </div>
        <div className='col-sm-4'></div>
      </div>

      <div className='row justify-content-center mt-5'>
        <div className='col-sm-10 col-lg-8'>
          <div className='jumbotron'>
            <div className='container'>
              <h3 className='display-6'>How to Play</h3>
              <p className='lead text-justify'>
                The traditional mode is a trivia where you must answer 10, 15 or
                20 questions according to your selections. You can select the
                category (or all of them). The questions have different
                difficulties and give points according to the following table:
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraditionalOptionsScreen;
