import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { uiReducer } from "./uiReducer";
import { jeopardyReducer } from "./jeopardyReducer";
import { authReducer } from "./authReducer";
import { statsReducer } from "./statsReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  ui: uiReducer,
  jeopardy: jeopardyReducer,
  auth: authReducer,
  stats: statsReducer,
});
