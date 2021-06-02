import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmHgiAn-wJNAWevkmDlEjRD015fMUOHGE",
    authDomain: "clone-b75f7.firebaseapp.com",
    databaseURL: "https://clone-b75f7-default-rtdb.firebaseio.com",
    projectId: "clone-b75f7",
    storageBucket: "clone-b75f7.appspot.com",
    messagingSenderId: "53990060203",
    appId: "1:53990060203:web:9b065a694c9f84b1aa47ee",
    measurementId: "G-KLTENT512S"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export{db,auth};