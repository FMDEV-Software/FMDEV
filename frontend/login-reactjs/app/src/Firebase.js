import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0vZyOjhvp-fsRAIHh00rjAHHf6IlvPtE",
  authDomain: "fmdev-afd9a.firebaseapp.com",
  projectId: "fmdev-afd9a",
  storageBucket: "fmdev-afd9a.appspot.com",
  messagingSenderId: "516439391263",
  appId: "1:516439391263:web:822c452aa9c4e26288692a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);