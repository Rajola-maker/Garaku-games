// Import the functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnna3vh9DdA3o2vytJPKWs-WccRFbEJ4g",
  authDomain: "crubkranks-d1a6c.firebaseapp.com",
  databaseURL: "https://crubkranks-d1a6c-default-rtdb.firebaseio.com",
  projectId: "crubkranks-d1a6c",
  storageBucket: "crubkranks-d1a6c.appspot.com",
  messagingSenderId: "358648127632",
  appId: "1:358648127632:web:38459b50c502ff352cb815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// -------------------------------
// Function to create a new user in Firestore
// Call this after signup
async function createNewUserDocument(user) {
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: serverTimestamp(),
      score: 0,        // default value
      level: 1         // default value
    });
    console.log("User document created in Firestore");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
}

// -------------------------------
// Export everything for use in your other JS files
export { auth, db, createNewUserDocument, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getDoc };