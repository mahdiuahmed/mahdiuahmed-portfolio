// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkwC8K0j2bu_EqjMejDnuMaHboN13YSo",
  authDomain: "mahdi-ahmed-portfolio.firebaseapp.com",
  projectId: "mahdi-ahmed-portfolio",
  storageBucket: "mahdi-ahmed-portfolio.firebasestorage.app",
  messagingSenderId: "147056887433",
  appId: "1:147056887433:web:5651507919f87ce2856858",
  measurementId: "G-5FL2W9Z7XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);

export default app;
