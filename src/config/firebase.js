import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD60d4QsYvzGxBDEbHtVClwtFdTbtHH268",
    authDomain: "meusetup-c2278.firebaseapp.com",
    projectId: "meusetup-c2278",
    storageBucket: "meusetup-c2278.appspot.com",
    messagingSenderId: "471757818325",
    appId: "1:471757818325:web:a9619a77234ce9a7f1555c",
    measurementId: "G-0QGSLMCTE0"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  //firebase.analytics();