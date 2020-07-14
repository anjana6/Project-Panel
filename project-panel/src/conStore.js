import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer';
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
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

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    attachAuthIsReady: true,
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// const thunk = [thunk]
export const conStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase)
)
    //applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    
    );

// const rrfConfig = {
//     userProfile: 'users',
//     userFirestoreForProfile:true
// }

export const rrfPorps = {
    firebase,
    config: rrfConfig,
    dispatch: conStore.dispatch,
    createFirestoreInstance,

}

