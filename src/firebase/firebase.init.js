// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER: DO NOT SHARE CONFIG PUBLICLY

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAl-A7_inhW8gKh_FayJotPpR4byf6lDkw",
    authDomain: "fir-2-78289.firebaseapp.com",
    projectId: "fir-2-78289",
    storageBucket: "fir-2-78289.firebasestorage.app",
    messagingSenderId: "688496425424",
    appId: "1:688496425424:web:ae958df5cb1715b2e4a1d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
