// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNZmAFlxcqk1y4ny87GMDRnTWONqgKC8g",
  authDomain: "flashcards-3ec3c.firebaseapp.com",
  projectId: "flashcards-3ec3c",
  storageBucket: "flashcards-3ec3c.appspot.com",
  messagingSenderId: "236366991224",
  appId: "1:236366991224:web:94711de70f7db877c2428d",
  measurementId: "G-ZSCQ6LGMZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
