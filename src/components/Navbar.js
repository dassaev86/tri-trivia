import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../redux/actions/authActions";

const Navbar = () => {
  const { name, logged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <Link className='navbar-brand' to='/'>
        Trivia App
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/traditional'>
              Traditional
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/strikeout'>
              Strikeout
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/jeopardy'>
              Jeopardy
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/myStats'>
              My Stats
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/records'>
              Top Records
            </Link>
          </li>
        </ul>

        <div className='form-inline my-2 my-lg-0'>
          {logged && <h5>Welcome, {name} </h5>}

          {logged ? (
            <Link
              className='btn btn-danger my-2 my-sm-0 ml-3'
              to='/'
              onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link
              className='btn btn-success my-2 my-sm-0 ml-3'
              to='/auth/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
