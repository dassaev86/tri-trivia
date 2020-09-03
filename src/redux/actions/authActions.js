import {
  firebase,
  googleAuthProvider,
  db,
} from "../../firebase/firebaseConfig";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./uiActions";
import Swal from "sweetalert2";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startRegisterWithEmailAndPassword = (
  email,
  password,
  username,
) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });
        console.log(user);
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.authLogin,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.authLogout,
});

export const startLoadUserStats = (uid) => {
  return async (dispatch) => {
    const userStatsSnap = await db
      .collection(uid)
      .orderBy("date", "desc")
      .get();
    const userStats = [];

    userStatsSnap.forEach((game) => {
      userStats.push(game.data());
    });

    dispatch(loadUserStats(userStats));
  };
};

const loadUserStats = (userStats) => ({
  type: types.authLoadUserStats,
  payload: {
    userStats: userStats,
  },
});
