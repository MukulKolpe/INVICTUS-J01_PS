import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2dD_E4CCcc-yJatECCD_Wm8nZSeZSM-Q",
  authDomain: "project-showcase-2264a.firebaseapp.com",
  projectId: "project-showcase-2264a",
  storageBucket: "project-showcase-2264a.appspot.com",
  messagingSenderId: "775681409745",
  appId: "1:775681409745:web:9df11f5d1becec9862fbf0",
  measurementId: "G-R9XPSFPDHE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
