import { types } from "../types/types";

const initialState = {
  uid: "",
  name: "",
  logged: false,
  stats: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        logged: true,
      };

    case types.authLoadUserStats:
      return {
        ...state,
        stats: action.payload.userStats,
      };

    case types.authLogout:
      return initialState;

    default:
      return state;
  }
};
