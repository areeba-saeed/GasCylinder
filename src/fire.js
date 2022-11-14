import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATrY27gqKkqnF9BQ7aTzED3Fj-mKYtj0E",
  authDomain: "gascylinder-da31a.firebaseapp.com",
  projectId: "gascylinder-da31a",
  storageBucket: "gascylinder-da31a.appspot.com",
  messagingSenderId: "281976725699",
  appId: "1:281976725699:web:0fe31e3990d8d87a25c276",
  measurementId: "G-C5CEYN2ETB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
