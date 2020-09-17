import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { firebase } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login, startLoadUserStats } from "../redux/actions/authActions";
import { useState } from "react";
import TraditionalOptionsScreen from "../components/screens/TraditionalOptionsScreen";
import TraditionalMode from "../components/screens/TraditionalMode";
import StrikeoutScreen from "../components/screens/StrikeoutScreen";
import StrikeoutGameScreen from "../components/screens/StrikeoutGameScreen";
import JeopardyScreen from "../components/screens/JeopardyScreen";
import JeopardyGameScreen from "../components/screens/JeopardyGameScreen";
import MainScreen from "../components/screens/MainScreen";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import Navbar from "../components/Navbar";
import UserStatsScreen from "../components/screens/UserStatsScreen";
import RecordsScreen from "../components/screens/RecordsScreen";
import Loading from "../components/Loading";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const { logged } = useSelector((state) => state.auth);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(startLoadUserStats(user.uid));
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/traditional'
              component={TraditionalOptionsScreen}
            />
            <Route exact path='/traditional/game' component={TraditionalMode} />
            <Route exact path='/strikeout' component={StrikeoutScreen} />
            <Route
              exact
              path='/strikeout/game'
              component={StrikeoutGameScreen}
            />
            <Route exact path='/jeopardy' component={JeopardyScreen} />
            <Route exact path='/jeopardy/game' component={JeopardyGameScreen} />
            <Route exact path='/myStats' component={UserStatsScreen} />
            <Route exact path='/records' component={RecordsScreen} />
            <PublicRoute
              path='/auth'
              component={AuthRouter}
              isLoggedIn={logged}
            />

            <Route exact path='/' component={MainScreen} />

            <Redirect to='/' />

            <Redirect to='auth/login' />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
