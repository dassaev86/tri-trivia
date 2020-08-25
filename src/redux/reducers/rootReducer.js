import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { uiReducer } from "./uiReducer";
import { jeopardyReducer } from "./jeopardyReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
  jeopardy: jeopardyReducer,
  auth: authReducer,
});
