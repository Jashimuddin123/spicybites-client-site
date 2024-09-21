// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB49Bj50SerPm7BAAT53rDJo0MeRhmXx_w",
  authDomain: "spicybites-management.firebaseapp.com",
  projectId: "spicybites-management",
  storageBucket: "spicybites-management.appspot.com",
  messagingSenderId: "1023410902860",
  appId: "1:1023410902860:web:e3071c4aaf96fbd95161e9",
  measurementId: "G-69VM5PXK0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
