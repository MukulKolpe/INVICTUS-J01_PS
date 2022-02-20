import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASxYNn2eDLROjaIwSx-65tHgAlHLDo9N8",
  authDomain: "localhost-ca033.firebaseapp.com",
  projectId: "localhost-ca033",
  storageBucket: "localhost-ca033.appspot.com",
  messagingSenderId: "438210075516",
  appId: "1:438210075516:web:1aea134c3dd4418dbd22f9",
  measurementId: "G-NG4SE7S51D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
