import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        data-target='#navbarHiddenContent'
        aria-controls='navbarHiddenContent'
        aria-expanded='true'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarHiddenContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/traditional'
              activeClassName='active'>
              Traditional
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/strikeout'
              activeClassName='active'>
              Strikeout
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/jeopardy'
              activeClassName='active'>
              Jeopardy
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/myStats'
              activeClassName='active'>
              My Stats
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink
              className='nav-link'
              to='/records'
              activeClassName='active'>
              Top Records
            </NavLink>
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
