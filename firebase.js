// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRrhPb7FC0PlJr53knjfIErZcP7lNY_vE",
  authDomain: "mahdiuahmed-5ecde.firebaseapp.com",
  projectId: "mahdiuahmed-5ecde",
  storageBucket: "mahdiuahmed-5ecde.appspot.com",
  messagingSenderId: "787432968122",
  appId: "1:787432968122:web:d62cdc046ded88549fd783",
  measurementId: "G-WYGS02TDP5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
