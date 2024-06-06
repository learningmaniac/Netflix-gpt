// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeuGB84JDCX1O2-dptpvYfHewYzd9ZHl4",
  authDomain: "netflixgpt-62666.firebaseapp.com",
  projectId: "netflixgpt-62666",
  storageBucket: "netflixgpt-62666.appspot.com",
  messagingSenderId: "1081091114926",
  appId: "1:1081091114926:web:be99fc82395e871e546a3f",
  measurementId: "G-5X77Q6LP5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
