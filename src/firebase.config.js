// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore" 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDrXrtcEK4E8TUKCWJTl8cA7_tJHuOD0w",
  authDomain: "house-marketing-app-4d43c.firebaseapp.com",
  projectId: "house-marketing-app-4d43c",
  storageBucket: "house-marketing-app-4d43c.appspot.com",
  messagingSenderId: "936848104954",
  appId: "1:936848104954:web:2f8e57fa9e45377dff1843",
  measurementId: "G-CJT5JKX3LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);