import { types } from "../types/types";

export const gameSelectedOptions = (category, difficulty, amount) => ({
  type: types.gameSelectedOptions,
  payload: {
    category,
    difficulty,
    amount,
  },
});
