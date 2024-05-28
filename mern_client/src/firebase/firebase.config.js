// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIAEtIaatmrtTLLCfMphQJsspgnF6uzjg",
  authDomain: "mern-book-inventory-64358.firebaseapp.com",
  projectId: "mern-book-inventory-64358",
  storageBucket: "mern-book-inventory-64358.appspot.com",
  messagingSenderId: "951533237507",
  appId: "1:951533237507:web:a85a8b0ff11a2c4daa2536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;