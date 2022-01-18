import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const config = {
  apiKey: "AIzaSyB-yKx7H03i53a9De-d9bqZ-AyumfhTlyM",
  authDomain: "netflix-94a95.firebaseapp.com",
  projectId: "netflix-94a95",
  storageBucket: "netflix-94a95.appspot.com",
  messagingSenderId: "584934772857",
  appId: "1:584934772857:web:80117bedb4696a2982c4a8",
};

const app = firebase.initializeApp(config);
const db = getFirestore(app);
const auth = getAuth();

export const Firebase = {
  auth,
  onAuthStateChanged,
};
