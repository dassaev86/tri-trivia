const { types } = require("../types/types");

const initialState = {
  trivia: {},
  idx: 0,
  score: {
    hits: 0,
    errors: 0,
    points: 0,
  },
};

export const jeopardyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.jeopardySetTrivia:
      console.log("IDX: ", action.payload.idx);
      return {
        ...state,
        trivia: {
          ...action.payload.trivia,
        },
        idx: action.payload.idx,
      };

    case types.jeopardySetScore:
      return {
        ...state,
        score: action.payload.score,
      };

    default:
      return state;
  }
};
