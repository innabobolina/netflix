// import firebase from "firebase";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0Eu2AdINlGFSEqeDtyEk1ir1hpOxlZo8",
  authDomain: "netflix-6ee3f.firebaseapp.com",
  projectId: "netflix-6ee3f",
  storageBucket: "netflix-6ee3f.appspot.com",
  messagingSenderId: "185558483256",
  appId: "1:185558483256:web:67d4f0f249d0fad4ca41cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
