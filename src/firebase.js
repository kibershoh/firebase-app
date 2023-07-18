import firebase, { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext } from "react";

export const app = initializeApp(
  {
    apiKey: "AIzaSyDO-zLAHp0qR6bSRRIbUAe_iudZwp88vb8",
    authDomain: "new-project-dc4f1.firebaseapp.com",
    projectId: "new-project-dc4f1",
    storageBucket: "new-project-dc4f1.appspot.com",
    messagingSenderId: "124095962139",
    appId: "1:124095962139:web:d35939f02333da5ef5ecbe"
  }
);

const db = getFirestore(app);

const Context = createContext(null)


   
