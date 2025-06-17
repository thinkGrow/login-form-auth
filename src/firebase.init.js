// DANGER

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ0hZLIdb-NIcOIpTQWaUBxVoUNf_-BwQ",
  authDomain: "login-form-auth-a745a.firebaseapp.com",
  projectId: "login-form-auth-a745a",
  storageBucket: "login-form-auth-a745a.firebasestorage.app",
  messagingSenderId: "258262078559",
  appId: "1:258262078559:web:51641a3ebf8b980acaf7ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
