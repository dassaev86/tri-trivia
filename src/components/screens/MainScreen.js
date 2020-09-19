import React from "react";

import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className=' col-12 col-sm-6 col-lg-4 mt-5'>
          <div className='card'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/triviaapp-f19ed.appspot.com/o/images%2Ftraditional_trivia.jpg?alt=media&token=32ce5cc2-6351-47eb-a80c-41f7074345a2'
              className='card-img-top'
              alt='image_traditional'
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
              src='https://firebasestorage.googleapis.com/v0/b/triviaapp-f19ed.appspot.com/o/images%2Fstrikeout.jpg?alt=media&token=39595a6e-1894-46f7-b84c-2fc4387d574f'
              className='card-img-top'
              alt='image_strikeout'
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
              src='https://firebasestorage.googleapis.com/v0/b/triviaapp-f19ed.appspot.com/o/images%2Fjeopardy.jpg?alt=media&token=e381efe0-ecdd-4eaf-918b-9c36b042b2c7'
              className='card-img-top'
              alt='image_jeopardy'
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
