import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { uiReducer } from "./uiReducer";
import { jeopardyReducer } from "./jeopardyReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
  jeopardy: jeopardyReducer,
});
