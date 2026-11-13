
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOC4BgLMSPL2br1d_xJ__450MZr0LINKI",
  authDomain: "aaamsc-online-fest.firebaseapp.com",
  projectId: "aaamsc-online-fest",
  storageBucket: "aaamsc-online-fest.firebasestorage.app",
  messagingSenderId: "348782422906",
  appId: "1:348782422906:web:4a8e96113ea3fbbf0244c3",
  measurementId: "G-JGGFF4LVJV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
