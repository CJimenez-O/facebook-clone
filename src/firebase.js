// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDg_513LSSQuHNGScOasOar8Zpo0sMv1bo",
    authDomain: "facebook-d9f3c.firebaseapp.com",
    projectId: "facebook-d9f3c",
    storageBucket: "facebook-d9f3c.appspot.com",
    messagingSenderId: "496667382404",
    appId: "1:496667382404:web:fe6e643ee3d391d357a8d1",
    measurementId: "G-EFMG641GJD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  console.log(firebaseApp)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;


  