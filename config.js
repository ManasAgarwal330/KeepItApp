import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyBeFwdUP8ORYoRAbrCdWxHhkAT5u3oeylk",
    authDomain: "keepit-faf7c.firebaseapp.com",
    databaseURL: "https://keepit-faf7c-default-rtdb.firebaseio.com",
    projectId: "keepit-faf7c",
    storageBucket: "keepit-faf7c.appspot.com",
    messagingSenderId: "1045777462031",
    appId: "1:1045777462031:web:13a3ea4a7e369fbd14047a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();