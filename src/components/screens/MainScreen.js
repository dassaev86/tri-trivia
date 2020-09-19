import React from "react";
import triviaImage from "../../assets/traditional_trivia.jpg";
import strikeoutImage from "../../assets/strikeout.jpg";
import jeopardyImage from "../../assets/jeopardy.jpg";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className=' col-12 col-sm-6 col-lg-4 mt-5'>
          <div className='card'>
            <img
              src={triviaImage}
              className='card-img-top'
              alt='image_traditional_trivia'
              style={{ maxHeight: "220px" }}
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

        <div className=' col-12 col-sm-6 col-lg-4 mt-5'>
          <div className='card'>
            <img
              src={strikeoutImage}
              className='card-img-top'
              alt='image_traditional_trivia'
              style={{ maxHeight: "220px" }}
            />
            <div className='card-body'>
              <h5 className='card-title'> Strikeout Mode</h5>
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

        <div className='col-12 col-sm-6 col-lg-4 mt-5'>
          <div className='card'>
            <img
              src={jeopardyImage}
              className='card-img-top'
              alt='image_traditional_trivia'
              style={{ maxHeight: "220px" }}
            />
            <div className='card-body'>
              <h5 className='card-title'>Jeopardy Mode</h5>
              <p className='card-text'>
                If you answer correctly you win the points, otherwise you lose
                them, similar to jeopardy.
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
