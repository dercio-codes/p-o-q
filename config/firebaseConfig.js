// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyADJ6ufECSzyf7iNeIygyrcfHGs1eQZ15o",
  authDomain: "p-o-q-a06f0.firebaseapp.com",
  projectId: "p-o-q-a06f0",
  storageBucket: "p-o-q-a06f0.appspot.com",
  messagingSenderId: "676422481956",
  appId: "1:676422481956:web:4fff2b8ca29602ccd600b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const facebookProvider = new FacebookAuthProvider();
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
