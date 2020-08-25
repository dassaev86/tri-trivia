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

export const setRandomCategories = (categories) => ({
  type: types.jeopardySetRandomCategories,
  payload: {
    categories,
  },
});

export const setActive = (active) => ({
  type: types.jeopardySetActive,
  payload: {
    active,
  },
});
