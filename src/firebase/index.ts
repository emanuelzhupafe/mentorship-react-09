import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "{API_KEY}",
    authDomain: "{AUTH_DOMAIN}",
    databaseURL: "{DATABASE_URL}",
    projectId: "{PROJECT_ID}",
    storageBucket: "{STORAGE_BUCKET}",
    messagingSenderId: "{MESSAGING_SENDER_ID}",
    appId: "{APP_ID}",
};

export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
