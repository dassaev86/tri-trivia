import { types } from "../types/types";

const initialState = {
  traditional: [],
  strikeout: [],
  jeopardy: [],
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case types.authLogin:
    //   return {
    //     ...state,
    //     uid: action.payload.uid,
    //     name: action.payload.displayName,
    //     logged: true,
    //   };

    default:
      return state;
  }
};
