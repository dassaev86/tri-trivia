import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useState } from "react";
import TriviaRouter from "./TriviaRouter";
import AuthRouter from "./AuthRouter";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path='/auth'
            component={AuthRouter}
            isLoggedIn={isLoggedIn}
          />

          <PrivateRoute
            path='/'
            component={TriviaRouter}
            isLoggedIn={isLoggedIn}
          />

          <Redirect to='auth/login' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
