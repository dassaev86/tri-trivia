import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZlaVXiDrKnS6XS2qcQuWb4hzgUodyQns",
  authDomain: "triviaapp-f19ed.firebaseapp.com",
  databaseURL: "https://triviaapp-f19ed.firebaseio.com",
  projectId: "triviaapp-f19ed",
  storageBucket: "triviaapp-f19ed.appspot.com",
  messagingSenderId: "333627830331",
  appId: "1:333627830331:web:0d8d24eda94caa010c6c1e",
  measurementId: "G-Z58GRMGDQ7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase, storage };
