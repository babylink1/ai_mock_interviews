// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsoXM9no_L2lGRNvOruaz004kDeDTpPWw",
  authDomain: "prepwise-d7af8.firebaseapp.com",
  projectId: "prepwise-d7af8",
  storageBucket: "prepwise-d7af8.firebasestorage.app",
  messagingSenderId: "715064552247",
  appId: "1:715064552247:web:ec95c4027c7214cf25c8b2",
  measurementId: "G-J12YJ20E8F",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore();
