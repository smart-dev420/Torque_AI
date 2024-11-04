

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth , signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD9lAdS-AL6we3RZ4-iNQDgCat5ewO1pE",
  authDomain: "torque-ai.firebaseapp.com",
  projectId: "torque-ai",
  storageBucket: "torque-ai.appspot.com",
  messagingSenderId: "582672524351",
  appId: "1:582672524351:web:72e9f6fbecf15bf21f448a",
  measurementId: "G-5R2SQ80D5W"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
  prompt : "select_account "
});

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// Initialize Firebase

export default app;
export const firestore = getFirestore(app);