// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0cNFD1LTRDsUFQzqaEWOby_740vAQng",
  authDomain: "lacakpesanan-d11af.firebaseapp.com",
  projectId: "lacakpesanan-d11af",
  storageBucket: "lacakpesanan-d11af.firebasestorage.app",
  messagingSenderId: "225067239054",
  appId: "1:225067239054:web:3005f6e9839ddde5df2bdf",
  measurementId: "G-9EN1EZMMJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);