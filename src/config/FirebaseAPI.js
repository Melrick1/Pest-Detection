/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnaO7gAFhyFW__kS55N9lATuRMVUJrH0s",
  authDomain: "pestdetecto.firebaseapp.com",
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
const FS = getFirestore(app);

// Observer to check the user's authentication state
onAuthStateChanged(Auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});

export { Auth, FS };