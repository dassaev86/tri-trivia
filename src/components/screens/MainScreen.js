import React from "react";
import triviaImage from "../../assets/traditional_trivia.jpg";
import strikeoutImage from "../../assets/strikeout.jpg";
import jeopardyImage from "../../assets/jeopardy.jpg";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-sm-12 col-lg-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={triviaImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Traditional Mode</h5>
              <p className='card-text'>
                Answer questions to get the best possible score.
              </p>
              <Link className='btn btn-info' to='/traditional'>
                Play
              </Link>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-lg-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={strikeoutImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Three Strike Out Mode</h5>
              <p className='card-text'>
                Answer all the questions you can until you get 3 mistakes, the
                you're out!
              </p>
              <Link className='btn btn-info' to='/strikeout'>
                Play
              </Link>
            </div>
          </div>
        </div>

        <div className='col-sm-12 col-lg-4'>
          <div className='card' style={{ width: "18rem" }}>
            <img
              src={jeopardyImage}
              className='card-img-top'
              alt='image_traditional_trivia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Points per Difficulty</h5>
              <p className='card-text'>
                You get more points the higher is the difficulty. Similar to
                Jeopardy!.
              </p>
              <Link to='/jeopardy' className='btn btn-info'>
                Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
