import React from "react";
import triviaImage from "../../assets/traditional_trivia.jpg";

const MainScreen = () => {
  return (
    <div className='container'>
      <h1 className='mb-lg-5'>Welcome to Trivia Game</h1>

      <div className='row'>
        <div className='col-sm-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={triviaImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Traditional Mode</h5>
              <p className='card-text'>
                Answer 10 questions in the normal difficulty, all categories.
              </p>
              <a href='https://google.com.mx' className='btn btn-info'>
                Play
              </a>
            </div>
          </div>
        </div>

        <div className='col-sm-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={triviaImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Three Strike Out Mode</h5>
              <p className='card-text'>
                Answer all the questions you can until you get 3 mistakes, the
                you're out!
              </p>
              <a href='https://google.com.mx' className='btn btn-info'>
                Play
              </a>
            </div>
          </div>
        </div>

        <div className='col-sm-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={triviaImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Points per Difficulty</h5>
              <p className='card-text'>
                You get more points the higher is the difficulty. Similar to
                Geopardy.
              </p>
              <a href='https://google.com.mx' className='btn btn-info'>
                Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
