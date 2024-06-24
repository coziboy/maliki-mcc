// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfe3LglEVylIv9lczqnVT0F5jN7Yk3uVI",
  authDomain: "mmcc-87d08.firebaseapp.com",
  projectId: "mmcc-87d08",
  storageBucket: "mmcc-87d08.appspot.com",
  messagingSenderId: "609497048934",
  appId: "1:609497048934:web:3c8ec07cdc1596abd54aa7",
  measurementId: "G-2DSN27JVH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);