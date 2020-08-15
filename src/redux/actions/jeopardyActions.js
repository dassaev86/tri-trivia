import { types } from "../types/types";

export const setTrivia = (trivia, idx) => ({
  type: types.jeopardySetTrivia,
  payload: {
    trivia: trivia,
    idx: idx,
  },
});

export const setScore = (score) => ({
  type: types.jeopardySetScore,
  payload: {
    score,
  },
});
