import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TraditionalMode from "../components/screens/TraditionalMode";
import MainScreen from "../components/screens/MainScreen";
import StrikeoutScreen from "../components/screens/StrikeoutScreen";
import StrikeoutGameScreen from "../components/screens/StrikeoutGameScreen";
import TraditionalOptionsScreen from "../components/screens/TraditionalOptionsScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path='/traditional'
            component={TraditionalOptionsScreen}
          />
          <Route exact path='/traditional/game' component={TraditionalMode} />
          <Route exact path='/strikeout' component={StrikeoutScreen} />
          <Route exact path='/strikeout/game' component={StrikeoutGameScreen} />
          <Route exact path='/' component={MainScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
