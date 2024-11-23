// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByl5oG2eDP6JqZTq4b4KWEoMiKuoVISiU",
  authDomain: "chat-5dcac.firebaseapp.com",
  projectId: "chat-5dcac",
  storageBucket: "chat-5dcac.appspot.com",
  messagingSenderId: "1073669580513",
  appId: "1:1073669580513:web:cf706bc0fbffbf8c98b9a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

// Export the services for use in other files
export { app, auth, firestore, storage, functions };