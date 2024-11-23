
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDslDMC84LYjza4eNX7dcXXRy1t47UmwT0",
  authDomain: "abde-251ed.firebaseapp.com",
  projectId: "abde-251ed",
  storageBucket: "abde-251ed.firebasestorage.app",
  messagingSenderId: "181840031735",
  appId: "1:181840031735:web:fd89d38c8d2d9c137a08f2",
  measurementId: "G-Y40J881GPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
