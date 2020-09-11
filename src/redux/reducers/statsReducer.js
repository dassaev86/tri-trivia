import { types } from "../types/types";

const initialState = {
  traditional: [],
  strikeout: [],
  jeopardy: [],
};

export const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.statsSetRecords:
      return {
        ...state,
        traditional: action.payload.traditionalRecords,
        strikeout: action.payload.strikeoutRecords,
        jeopardy: action.payload.jeopardyRecords,
      };

    default:
      return state;
  }
};
