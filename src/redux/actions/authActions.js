import {
  firebase,
  googleAuthProvider,
  db,
  facebookAuthProvider,
} from "../../firebase/firebaseConfig";
import { types } from "../types/types";
import { startLoading, finishLoading } from "./uiActions";
import Swal from "sweetalert2";
import { storage } from "../../firebase/firebaseConfig";

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
        // dispatch(createUserInFirestore(user.uid, username, user.photoURL));
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Error", err.message, "error");
      });
  };
};

// const createUserInFirestore = (uid, username, photoUrl) => {
//   return async () => {
//     await db.collection("users").add({
//       uid,
//       username,
//       photoUrl,
//     });
//   };
// };

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        // dispatch(
        //   createUserInFirestore(user.uid, user.displayName, user.photoURL),
        // );
        dispatch(login(user.uid, user.displayName, user.photoURL));
      });
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        // dispatch(
        //   createUserInFirestore(user.uid, user.displayName, user.photoURL),
        // );
        dispatch(login(user.uid, user.displayName, user.photoURL));
      });
  };
};

export const login = (uid, displayName, photoUrl) => ({
  type: types.authLogin,
  payload: {
    uid,
    displayName,
    photoUrl,
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

export const changeUsername = (username) => {
  return (dispatch) => {
    const user = firebase.auth().currentUser;

    if (user.displayName !== username && username.trim() === "") {
      Swal.fire(
        "You can´t be No One",
        "You have to choose a username with at least 3 characters",
        "error",
      );
      return;
    }

    if (user.displayName !== username && username.trim().length < 3) {
      Swal.fire(
        "You need more letters",
        "You have to choose a username with at least 3 characters",
        "error",
      );
      return;
    }

    if (
      user.displayName !== username &&
      username !== "" &&
      username?.length > 3
    ) {
      dispatch(startLoading());
      user
        .updateProfile({
          displayName: username,
        })
        .then(() => {
          dispatch(finishLoading());
          Swal.fire(
            "Updated sucessfuly",
            "Your username has been updated",
            "success",
          );

          dispatch(updateProfile(username));
          dispatch(updateUsersCollection(user.uid, username, user.photoURL));
        })
        .catch((err) => {
          dispatch(finishLoading());
          Swal.fire("Error", err, "error");
        });
    }
  };
};

export const changePhoto = (image) => {
  return (dispatch) => {
    const user = firebase.auth().currentUser;

    if (image !== null) {
      dispatch(startLoading());
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              user
                .updateProfile({
                  photoURL: url,
                })
                .then(() => {
                  dispatch(finishLoading());
                  Swal.fire(
                    "Updated sucessfuly",
                    "Your profile picture has been updated",
                    "success",
                  );

                  dispatch(updateProfilePicture(url));
                  dispatch(
                    updateUsersCollection(user.uid, user.displayName, url),
                  );
                })
                .catch((err) => {
                  dispatch(finishLoading());
                  Swal.fire("Error", err, "error");
                });
            });
        },
      );
    }
  };
};

const updateUsersCollection = (uid, username, photoUrl) => {
  return () => {
    db.collection("users")
      .doc(`${uid}`)
      .update({
        uid,
        username,
        photoUrl,
      })
      .then(() => {
        console.log("User Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const updateProfile = (username) => ({
  type: types.authUpdateProfile,
  payload: {
    username,
  },
});

const updateProfilePicture = (photoURL) => ({
  type: types.authUpdateProfilePicture,
  payload: {
    photoURL,
  },
});
