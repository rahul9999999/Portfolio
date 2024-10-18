
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDgofXP6D30Eoq_0lkiND2ngPDFGMaU9hc",
  authDomain: "portfolio-4cc6a.firebaseapp.com",
  projectId: "portfolio-4cc6a",
  storageBucket: "portfolio-4cc6a.appspot.com",
  messagingSenderId: "310089023750",
  appId: "1:310089023750:web:8bcf12836605447d1b5e87",
  measurementId: "G-2KYV31EZLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);