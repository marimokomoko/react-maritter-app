import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBifoDmE6-cMTAAIgjUdq92cyqDnhSLUWA",
  authDomain: "react-maritter-app.firebaseapp.com",
  projectId: "react-maritter-app",
  storageBucket: "react-maritter-app.appspot.com",
  messagingSenderId: "96795406315",
  appId: "1:96795406315:web:2b7119963b35e0232833ae",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
