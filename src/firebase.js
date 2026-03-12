// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhOHC2rwQiy5q5rdI5I7nqsPZOLXtELdE",
  authDomain: "dyt-randevu.firebaseapp.com",
  projectId: "dyt-randevu",
  storageBucket: "dyt-randevu.firebasestorage.app",
  messagingSenderId: "968697799104",
  appId: "1:968697799104:web:87986c5f5d08e9bfe2e825",
  measurementId: "G-QJR4K1BRTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Buraya sisteme giriş yapmasına izin verdiğiniz admin e-postalarını ekleyin
export const AUTHORIZED_EMAILS = [
  "bedirhank.bk41@gmail.com", // Kendi e-postanızı buraya ekleyin
  "aysegonen@admin.com"
];

export default app;