// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEzqwFJqWLI8o2mNSsNse9Kkn7fZIgD5Q",
  authDomain: "fir-auth-conceptual-c1d89.firebaseapp.com",
  projectId: "fir-auth-conceptual-c1d89",
  storageBucket: "fir-auth-conceptual-c1d89.appspot.com",
  messagingSenderId: "34770011716",
  appId: "1:34770011716:web:68f10c748c866f222d1e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;