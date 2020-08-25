import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
