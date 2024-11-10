// do not store config in client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmcfMRNXFh-rsFbYLloq4qJcHiB04zI4c",
  authDomain: "simple-firebase-e53ac.firebaseapp.com",
  projectId: "simple-firebase-e53ac",
  storageBucket: "simple-firebase-e53ac.firebasestorage.app",
  messagingSenderId: "1062884964268",
  appId: "1:1062884964268:web:e4f61128330e8a68cc2c09",
  measurementId: "G-453X58S4VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;