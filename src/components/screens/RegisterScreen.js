import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
import { startRegisterWithEmailAndPassword } from "../../redux/actions/authActions";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [formValues, handleInputChange] = useForm({
    username: "Sofia",
    email: "sofia@gmail.com",
    password1: "123456",
    password2: "123456",
  });

  const { username, email, password1, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password1, username));
    }
  };

  const isFormValid = () => {
    if (username.trim().length === 0) {
      setErrorMessage("Username is required");
      return false;
    } else if (!validator.isEmail(email)) {
      setErrorMessage("Email is not valid");
      return false;
    } else if (password1 !== password2 || password1.length < 6) {
      setErrorMessage("Password should match and be 6 characters or longer");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-sm-12 col-lg-4 card'>
            <div className='card-body'>
              <h4>Register</h4>

              <form onSubmit={handleRegister}>
                <div className='input-group-prepend mt-2'>
                  <span
                    className='input-group-text'
                    id='basic-addon1'
                    style={{ width: "130px" }}>
                    Username
                  </span>
                  <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Username'></input>
                </div>

                <div className='input-group-prepend mt-2'>
                  <span
                    className='input-group-text'
                    id='basic-addon1'
                    style={{ width: "130px" }}>
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
                    style={{ width: "130px" }}>
                    Password
                  </span>
                  <input
                    type='password'
                    name='password1'
                    value={password1}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Password'></input>
                </div>

                <div className='input-group-prepend mt-2'>
                  <span
                    className='input-group-text'
                    id='basic-addon1'
                    style={{ width: "130px" }}>
                    Confirm
                  </span>
                  <input
                    type='password'
                    name='password2'
                    value={password2}
                    onChange={handleInputChange}
                    className='form-control'
                    placeholder='Confirm Password'></input>
                </div>

                {errorMessage !== "" && (
                  <div className='alert-danger text-white mt-3'>
                    {errorMessage}
                  </div>
                )}

                {
                  <button className='btn btn-primary btn-block mt-4 mb-3'>
                    Register
                  </button>
                }

                <Link to='/auth/login'>I already have an account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
