/* 
Steps to create a react app with firebase and google authentification

step 1: install react-router-dom: npm install react-router-dom
step 2: install firebase: npm install firebase
step 3: console firebase
step 4: create a firebase project
step 5: create a web app in firebase
step 6: copy the firebase config (DANGER: DO NOT SHARE CONFIG PUBLICLY)
step 7: create a file named firebase.init.js in src/firebase
step 8: paste the firebase config in firebase.init.js

step 9: export firebase in firebase.init.js
step 10: import firebase in src/components/Login.jsx

step 11: export auth from firebase.init.js
step 12: import auth in src/components/Login.jsx

step 13: in the console authentification > enable Google Provider
step 14: import GoogleAuthProvider in src/components/Login.jsx

step 15: Sign in with Google
    1. Import the auth object from firebase/init.js
    2. Call the signInWithPopup method on the auth object
    3. Pass the provider object as an argument to the signInWithPopup method
    4. Handle the response from the signInWithPopup method
*/
