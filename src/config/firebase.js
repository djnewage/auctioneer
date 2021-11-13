import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyDznAXaikx1pxnjjLWai11sH2CcVoRFgDo",
  authDomain: "oneofone-b4f03.firebaseapp.com",
  projectId: "oneofone-b4f03",
  storageBucket: "oneofone-b4f03.appspot.com",
  messagingSenderId: "784050459207",
  appId: "1:784050459207:web:a4d3ea2465fb64a2e71762",
  measurementId: "G-J6LY01ZPJ0"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
