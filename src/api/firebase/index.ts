import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJxyybtba5jaE363wjcSovzNGkOqV7H9w",
  authDomain: "tinder-62a3a.firebaseapp.com",
  projectId: "tinder-62a3a",
  storageBucket: "tinder-62a3a.appspot.com",
  messagingSenderId: "916579952356",
  appId: "1:916579952356:web:9da507221f8365295a2ef1",
  measurementId: "G-B03TKRHVBM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};