import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDYcV42P0mAsqCMOGLYG26_PbyqBD0gJsU",
    authDomain: "reactclass-1d6f7.firebaseapp.com",
    projectId: "reactclass-1d6f7",
    storageBucket: "reactclass-1d6f7.appspot.com",
    messagingSenderId: "1063818447901",
    appId: "1:1063818447901:web:19d82c32a0a3ec2c454af4"
  });

const db = getFirestore();

export default db;
