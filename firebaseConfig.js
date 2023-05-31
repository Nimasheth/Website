// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3yP403Tmt864a9LZy3u31hkA4kmiFh3s",
  authDomain: "personal-website-870cd.firebaseapp.com",
  projectId: "personal-website-870cd",
  storageBucket: "personal-website-870cd.appspot.com",
  messagingSenderId: "270089945506",
  appId: "1:270089945506:web:4012815636d6808c88b2fb",
  measurementId: "G-3H484EKELS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);