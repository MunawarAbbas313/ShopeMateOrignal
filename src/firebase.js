import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5JisT9xaz5B4F3hvNVN1_cU_AGrOuMxM",
  authDomain: "shopmate-deb0a.firebaseapp.com",
  projectId: "shopmate-deb0a",
  storageBucket: "shopmate-deb0a.firebasestorage.app",
  messagingSenderId: "281056339859",
  appId: "1:281056339859:web:b14508cba0a4f9af242a66",
  measurementId: "G-8SLCZN82QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);