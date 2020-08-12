import { types } from "../types/types";

const initialState = {
  user: "Dassaev",
  hits: 0,
  errors: 0,
  points: 0,
  category: "",
  difficulty: "medium",
  amount: "10",
  mode: "",
  active: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gameSelectedOptions:
      return {
        ...state,
        category: action.payload.category,
        difficulty: action.payload.difficulty,
        amount: action.payload.amount,
        mode: action.payload.mode,
        active: action.payload.active,
      };

    case types.gameSaveResults:
      return {
        ...state,
        hits: action.payload.hits,
        errors: action.payload.errors,
        points: action.payload.points,
      };

    default:
      return state;
  }
};
