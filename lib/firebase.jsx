
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAJ3dPAxJ1-7qISeydY7YBzB_Uobj0PtwY",
  authDomain: "auth-test-465d7.firebaseapp.com",
  projectId: "auth-test-465d7",
  storageBucket: "auth-test-465d7.firebasestorage.app",
  messagingSenderId: "732172665395",
  appId: "1:732172665395:web:3f1be6d40c6d8515b99946",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth()