import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseInit = () =>{
var firebaseConfig = {
    apiKey: "AIzaSyCg1zKg-iEUuIOZitreB68jx4ZPjcjmbtU",
    authDomain: "mitimota-queen.firebaseapp.com",
    projectId: "mitimota-queen",
    storageBucket: "mitimota-queen.appspot.com",
    messagingSenderId: "860386910004",
    appId: "1:860386910004:web:1746e03aaf64c1f7f24f61",
    measurementId: "G-15BEXLNSHM"
  };
  firebase.initializeApp(firebaseConfig);
};