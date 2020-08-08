import { types } from "../types/types";

const initialState = {
  user: "Dassaev",
  rights: 0,
  wrongs: 0,
  points: 0,
  category: "",
  difficulty: "medium",
  amount: "10",
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gameSelectedOptions:
      return {
        ...state,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        amount: action.payload.amount,
      };

    default:
      return state;
  }
};
