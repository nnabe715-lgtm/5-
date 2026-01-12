import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFDhpHaYrLhav4Q71YF0SzjioU7_M323M",
  authDomain: "homepage-d5a0f.firebaseapp.com",
  projectId: "homepage-d5a0f",
  storageBucket: "homepage-d5a0f.firebasestorage.app",
  messagingSenderId: "910872481318",
  appId: "1:910872481318:web:96c34a2e48b33151c0a0e7",
  measurementId: "G-5PZ3DEZYY6"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);