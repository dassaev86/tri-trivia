import { types } from "../types/types";

export const gameSelectedOptions = (
  category,
  difficulty,
  amount,
  mode,
  active,
) => ({
  type: types.gameSelectedOptions,
  payload: {
    category,
    difficulty,
    amount,
    mode,
    active,
  },
});

export const gameSaveResults = (hits, errors, points) => ({
  type: types.gameSaveResults,
  payload: {
    hits,
    errors,
    points,
  },
});
