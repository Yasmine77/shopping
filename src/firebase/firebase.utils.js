import firebase from 'firebase/compat/app'
//import firebase from 'firebase'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 
import { GoogleAuthProvider } from "firebase/auth";


import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyBDiEcZl959FACZ4LesAtxCu6i-cNQCR8A",
  
    authDomain: "crwn-db-c0b6f.firebaseapp.com",
  
    projectId: "crwn-db-c0b6f",
  
    storageBucket: "crwn-db-c0b6f.appspot.com",
  
    messagingSenderId: "56102418459",
  
    appId: "1:56102418459:web:5efd6dee069251b8bd20be",
  
    measurementId: "G-CTJH9WVLV0"
  
  };
  

firebase. initializeApp(firebaseConfig);

/* const app = initializeApp(firebaseConfig);
 */  export const auth =firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;