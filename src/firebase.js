
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARJmgqVgQ2xaTlrIOWCadTj00riR9uDbM",
//   authDomain: "clone-68a12.firebaseapp.com",
//   projectId: "clone-68a12",
//   storageBucket: "clone-68a12.appspot.com",
//   messagingSenderId: "1028511215493",
//   appId: "1:1028511215493:web:b4aae043f70641862a9eec",
//   measurementId: "G-XGRK9L4TB7"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDhOucgKYVxw4MiUgHgG3wD6Jkl-sE2Ly4",
  authDomain: "challenge-78666.firebaseapp.com",
  projectId: "challenge-78666",
  storageBucket: "challenge-78666.appspot.com",
  messagingSenderId: "675455768732",
  appId: "1:675455768732:web:05244e7c598df7ace2b559",
  measurementId: "G-814GLJ9VFM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth};