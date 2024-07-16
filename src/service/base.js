// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsHbZ51WE9eJn2mSFF08lRI6MfOmoul8",
  authDomain: "learn-lingo-4e40b.firebaseapp.com",
  projectId: "learn-lingo-4e40b",
  storageBucket: "learn-lingo-4e40b.appspot.com",
  messagingSenderId: "271847987409",
  appId: "1:271847987409:web:54f515a7489b693ecf4df0",
  measurementId: "G-XTXKVDLBSB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

