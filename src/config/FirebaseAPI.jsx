/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnaO7gAFhyFW__kS55N9lATuRMVUJrH0s",
  authDomain: "pestdetecto.firebaseapp.com",
  databaseURL: "https://pestdetecto-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pestdetecto",
  storageBucket: "pestdetecto.firebasestorage.app",
  messagingSenderId: "637541259245",
  appId: "1:637541259245:web:b3584e87a654560143f9e4",
  measurementId : "G-2B6NY3QGCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Services
const Auth = getAuth(app);
const fireStore = getFirestore(app);
const fireDB = getDatabase(app)

export { Auth, fireStore, fireDB };