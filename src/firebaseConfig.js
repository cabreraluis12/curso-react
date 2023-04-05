// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUuoZAd7LQpRQ4QXQOuQCngJ-26DtXSBo",
  authDomain: "curso-react-coder-9947d.firebaseapp.com",
  projectId: "curso-react-coder-9947d",
  storageBucket: "curso-react-coder-9947d.appspot.com",
  messagingSenderId: "297251025843",
  appId: "1:297251025843:web:a978dfba6db80e2a5211c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
