// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDUZUGBUA6c5zF6qeesueMHQghIyiHcno",
  authDomain: "sharedlist-df919.firebaseapp.com",
  projectId: "sharedlist-df919",
  storageBucket: "sharedlist-df919.appspot.com",
  messagingSenderId: "79629619035",
  appId: "1:79629619035:web:03225e16b8f3cdfdd3d47e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db};