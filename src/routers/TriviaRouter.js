import React from "react";
import MainScreen from "../components/screens/MainScreen";
import TraditionalMode from "../components/screens/TraditionalMode";
import StrikeoutScreen from "../components/screens/StrikeoutScreen";
import StrikeoutGameScreen from "../components/screens/StrikeoutGameScreen";
import TraditionalOptionsScreen from "../components/screens/TraditionalOptionsScreen";
import JeopardyScreen from "../components/screens/JeopardyScreen";
import JeopardyGameScreen from "../components/screens/JeopardyGameScreen";
import { Switch, Route, Redirect } from "react-router-dom";

const TriviaRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/traditional' component={TraditionalOptionsScreen} />
        <Route exact path='/traditional/game' component={TraditionalMode} />
        <Route exact path='/strikeout' component={StrikeoutScreen} />
        <Route exact path='/strikeout/game' component={StrikeoutGameScreen} />
        <Route exact path='/jeopardy' component={JeopardyScreen} />
        <Route exact path='/jeopardy/game' component={JeopardyGameScreen} />
        <Route exact path='/' component={MainScreen} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default TriviaRouter;
