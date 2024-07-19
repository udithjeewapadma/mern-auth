// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c501b.firebaseapp.com",
  projectId: "mern-auth-c501b",
  storageBucket: "mern-auth-c501b.appspot.com",
  messagingSenderId: "1092089959628",
  appId: "1:1092089959628:web:8e2cfb774bfbdb26e35e69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);