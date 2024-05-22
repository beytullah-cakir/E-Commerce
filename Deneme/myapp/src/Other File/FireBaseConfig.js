  import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7OemBASNbOtZWGPaWcai7tr1dwF7AhoQ",
  authDomain: "user-informations-6f1a0.firebaseapp.com",
  databaseURL: "https://user-informations-6f1a0-default-rtdb.firebaseio.com",
  projectId: "user-informations-6f1a0",
  storageBucket: "user-informations-6f1a0.appspot.com",
  messagingSenderId: "756878688670",
  appId: "1:756878688670:web:fec3514bafe1b91454568f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase(app);

export { auth };

