import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDQyETqEw1em93uswS_U3V8n-gtWoabVfk",
  authDomain: "react-notes-e9653.firebaseapp.com",
  projectId: "react-notes-e9653",
  storageBucket: "react-notes-e9653.appspot.com",
  messagingSenderId: "151762842685",
  appId: "1:151762842685:web:62b4e3e33aef3082efa654"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
