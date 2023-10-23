import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  //Add your Database credentials here:
  //apiKey
  //authDomain
  //projectId
  //storageBucket
  //messagingSenderId
  //appId
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

