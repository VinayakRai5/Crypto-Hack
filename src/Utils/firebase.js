// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDuJ0w9alT0LjYxyFR_ejpX1Zt8JjUm7bA",
  authDomain: "cryptoexchange-f91ef.firebaseapp.com",
  projectId: "cryptoexchange-f91ef",
  storageBucket: "cryptoexchange-f91ef.appspot.com",
  messagingSenderId: "734864836257",
  appId: "1:734864836257:web:0e94670a30db99a4f992e0",
  measurementId: "G-S188FFKB82"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();


export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

export const OnAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const signOutOfApp = () => signOut(auth);

