// src/firebase.js
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDuFUc0g0jwHfcSQKIXpu9UjRqGgzZ_UWU",
  authDomain: "beltsio-7bb2f.firebaseapp.com",
  databaseURL: "https://beltsio-7bb2f.firebaseio.com",
  projectId: "beltsio-7bb2f",
  storageBucket: "",
  messagingSenderId: "357995682004"
};
firebase.initializeApp(config);
export default firebase;
