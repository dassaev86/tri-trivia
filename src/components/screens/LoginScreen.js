import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoginEmailPassword,
  startGoogleLogin,
  startFacebookLogin,
} from "../../redux/actions/authActions";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  console.log(loading);
  const [formValues, handleInputChange] = useForm({
    email: "sofia@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  };

  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-sm-12 col-lg-4 card'>
            <div className='card-body'>
              <h4>Login</h4>
              <form onSubmit={handleLogin}>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text'
                    id='basic-addon1'
                    style={{ width: "120px" }}>
                    Email
                  </span>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Email'></input>
                </div>

                <div className='input-group-prepend mt-2'>
                  <span
                    className='input-group-text'
                    id='basic-addon1'
                    style={{ width: "120px" }}>
                    Password
                  </span>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Password'></input>
                </div>

                <button
                  className='btn btn-primary btn-block mt-2 mb-3'
                  disabled={loading}>
                  {loading ? "Wait for it..." : "Login"}
                </button>

                <Link to='/auth/register'>I don´t have an account</Link>
              </form>
            </div>

            <div className='card mt-5'>
              <div className='card-body'>
                <button
                  className='btn btn-info btn-block mt-2'
                  onClick={handleFacebookLogin}>
                  Login with Facebook
                </button>
                <button
                  className='btn btn-light btn-block mt-2'
                  onClick={handleGoogleLogin}>
                  Login with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
