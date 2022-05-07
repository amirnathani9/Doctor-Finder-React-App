import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCZja5B9Hjopag6x7UoX2a8L74P0HbDdfI",
    authDomain: "doctor-finder-99095.firebaseapp.com",
    projectId: "doctor-finder-99095",
    storageBucket: "doctor-finder-99095.appspot.com",
    messagingSenderId: "316935938617",
    appId: "1:316935938617:web:c4696c167eb9b61a81a3e8",
    measurementId: "G-H8QD0FN89M"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)