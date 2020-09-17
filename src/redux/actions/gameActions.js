import { types } from "../types/types";
import { db } from "../../firebase/firebaseConfig";

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

export const saveGameResultsToDB = (hits, errors, points, gameMode) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newRecord = {
      hits,
      errors,
      points,
      gameMode,
      date: Date.now(),
    };

    const doc = await db.collection(uid).add(newRecord);
    console.log(doc);
  };
};

export const saveGameResultsToGeneralStats = (
  hits,
  errors,
  points,
  gameMode,
) => {
  return async (dispatch, getState) => {
    const user = getState().auth;

    const newRecord = {
      userUid: user.uid,
      username: user.name,
      photoUrl: user.photoUrl,
      hits,
      errors,
      points,
      date: Date.now(),
    };

    const doc = await db.collection(gameMode).add(newRecord);
    console.log(doc);
  };
};
