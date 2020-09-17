import { types } from "../types/types";

const initialState = {
  uid: "",
  name: "",
  photoUrl: "",
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
        photoUrl: action.payload.photoUrl,
        logged: true,
      };

    case types.authLoadUserStats:
      return {
        ...state,
        stats: action.payload.userStats,
      };

    case types.authUpdateProfile:
      return {
        ...state,
        name: action.payload.username,
      };

    case types.authUpdateProfilePicture:
      return {
        ...state,
        photoUrl: action.payload.photoURL,
      };

    case types.authLogout:
      return initialState;

    default:
      return state;
  }
};
