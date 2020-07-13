import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLDL5olzzW1pmFObxLh06nUuDErRZfw9Q",
    authDomain: "project-panel-6b126.firebaseapp.com",
    databaseURL: "https://project-panel-6b126.firebaseio.com",
    projectId: "project-panel-6b126",
    storageBucket: "project-panel-6b126.appspot.com",
    messagingSenderId: "589771175494",
    appId: "1:589771175494:web:7dc67fe2062fb5492ffc47"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;