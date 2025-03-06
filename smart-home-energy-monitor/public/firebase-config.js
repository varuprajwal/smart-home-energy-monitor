// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';

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