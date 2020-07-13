import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer';
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';

// const thunk = [thunk]
export const configStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase,fbConfig),
)
    );

export const rrfPorps = {
    firebase,
    config: fbConfig,
    dispatch: configStore.dispatch,
    createFirestoreInstance
}

