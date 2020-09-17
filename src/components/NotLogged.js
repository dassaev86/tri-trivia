import React from "react";
import { Link } from "react-router-dom";

const NotLogged = () => {
  return (
    <>
      <div className='row justify-content-center mt-5'>
        <div className='col-12 col-sm-8 col-lg-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>We don't know who you are...</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                You are not logged in
              </h6>
              <p className='card-text'>
                You can play anonymously as much as you want, but if you want to
                register your scores, we need you to login (please :D)
              </p>
              <Link to='/auth/login' className='btn btn-block btn-success'>
                Login
              </Link>
              <Link to='/' className='btn btn-block btn-primary'>
                Main Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLogged;
