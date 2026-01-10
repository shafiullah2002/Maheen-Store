// src/components/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8N7iEjqCA0mMa_deF7lq6NBhlIv5I3E",
  authDomain: "clone-shafi.firebaseapp.com",
  projectId: "clone-shafi",
  storageBucket: "clone-shafi.firebasestorage.app",
  messagingSenderId: "160146194750",
  appId: "1:160146194750:web:e7c1cb9176fbcf5811ec6f",
  measurementId: "G-QG5RSBFLKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);          // Authentication service
const db = getFirestore(app);       // Firestore database service

// Optional: Analytics (you can keep or remove it)
import { getAnalytics } from "firebase/analytics";
const analytics = getAnalytics(app);

// Export the services we need
export { auth, db };