import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkm2r2F-My-LZA7VB88fPE7vvmjzIoxGA",
  authDomain: "books-de303.firebaseapp.com",
  databaseURL:
    "https://books-de303-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "books-de303",
  storageBucket: "books-de303.appspot.com",
  messagingSenderId: "800886379196",
  appId: "1:800886379196:web:5b169f0387e19d3578b6b9",
};

export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
