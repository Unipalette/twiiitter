import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyADw6q3HoNfLhQhp6PGQaC4ZE0NgQk7aGM",
  authDomain: "twiiitter-a9a2f.firebaseapp.com",
  projectId: "twiiitter-a9a2f",
  storageBucket: "twiiitter-a9a2f.appspot.com",
  messagingSenderId: "679235352602",
  appId: "1:679235352602:web:8416e1347f3f32b00a79a3",
};

firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;

export const authService = firebase.auth();
