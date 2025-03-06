// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAyKjnc-fu6p18XVnzVmvNKWzkdTLFqosk",
  authDomain: "smart-home-energy-monito-4117c.firebaseapp.com",
  projectId: "smart-home-energy-monito-4117c",
  storageBucket: "smart-home-energy-monito-4117c.firebasestorage.app",
  messagingSenderId: "180812274403",
  appId: "1:180812274403:web:8738bfef0c40d4d74b03d6",
  measurementId: "G-V0HMT9TLTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
