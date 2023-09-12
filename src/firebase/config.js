// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9eLrBbivtCEE5hK6yRw1GQeKpYAbxD5w",
  authDomain: "add-to-cart-bda05.firebaseapp.com",
  projectId: "add-to-cart-bda05",
  storageBucket: "add-to-cart-bda05.appspot.com",
  messagingSenderId: "150072475948",
  appId: "1:150072475948:web:20d92e8eb39c7f4069ec89",
  measurementId: "G-VD2NGQZBXG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
