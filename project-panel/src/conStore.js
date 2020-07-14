import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer';
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from './config/fbConfig';

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
  }
  firebase.initializeApp(firebaseConfig);

export const conStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase)
    )
    );

export const rrfPorps = {
    firebase,
    config: rrfConfig,
    dispatch: conStore.dispatch,
    createFirestoreInstance,
}

