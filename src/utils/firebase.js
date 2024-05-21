// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALkkl1wKx05dI2pi5yRfYjD-859w2iGH4",
  authDomain: "fir-assigment-ab653.firebaseapp.com",
  projectId: "fir-assigment-ab653",
  storageBucket: "fir-assigment-ab653.appspot.com",
  messagingSenderId: "562777931232",
  appId: "1:562777931232:web:9320df3651245d16d37f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;