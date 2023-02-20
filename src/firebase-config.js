// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjPw1xgCLawp3_MuaUl0RzviMCCj6dbqA",
  authDomain: "chatapp-1b33a.firebaseapp.com",
  projectId: "chatapp-1b33a",
  storageBucket: "chatapp-1b33a.appspot.com",
  messagingSenderId: "31900456808",
  appId: "1:31900456808:web:39fba866867b4f2c3f68dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);