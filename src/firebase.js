import firebase from "firebase";
import "firebase/auth"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCN9YeVbIa31Y1y6EwFUx-wln3zwV9l7po",
    authDomain: "karma-well.firebaseapp.com",
    projectId: "karma-well",
    storageBucket: "karma-well.appspot.com",
    messagingSenderId: "209783594569",
    appId: "1:209783594569:web:a417bca4bdefa95c32a998"
});

const db = firebaseApp.firestore();

export const auth = firebaseApp.auth()
export default db ;