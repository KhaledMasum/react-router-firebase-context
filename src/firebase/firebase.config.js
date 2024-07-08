// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqsH4kb_iGW8cAXLYWPWugK7JbtOwm2JE",
  authDomain: "react-router-firebase-co-237cc.firebaseapp.com",
  projectId: "react-router-firebase-co-237cc",
  storageBucket: "react-router-firebase-co-237cc.appspot.com",
  messagingSenderId: "1065219908372",
  appId: "1:1065219908372:web:6aad3509d832c0ed6c5801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

