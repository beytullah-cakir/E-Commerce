import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC7OemBASNbOtZWGPaWcai7tr1dwF7AhoQ",
  authDomain: "user-informations-6f1a0.firebaseapp.com",
  projectId: "user-informations-6f1a0",
  storageBucket: "user-informations-6f1a0.appspot.com",
  messagingSenderId: "756878688670",
  appId: "1:756878688670:web:fec3514bafe1b91454568f",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);


