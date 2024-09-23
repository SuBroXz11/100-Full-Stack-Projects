// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk_lDQC9t_uw2v38riqDpMzJVcl1TsJDQ",
  authDomain: "reactchatapp-5f7f6.firebaseapp.com",
  projectId: "reactchatapp-5f7f6",
  storageBucket: "reactchatapp-5f7f6.appspot.com",
  messagingSenderId: "322943089860",
  appId: "1:322943089860:web:d1179661de612a067c5d91",
  measurementId: "G-SGYY1H213J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
