// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYYpT9ZrT6SgqmHq8TfFeqHGCKovVPkRc",
  authDomain: "proyectoweb-d33c1.firebaseapp.com",
  projectId: "proyectoweb-d33c1",
  storageBucket: "proyectoweb-d33c1.appspot.com",
  messagingSenderId: "363225107187",
  appId: "1:363225107187:web:155d7afe4012706ac0c586"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

export { db };
export default appFirebase;