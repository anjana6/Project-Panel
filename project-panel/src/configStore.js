import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// const thunk = [thunk]
const configStore = createStore(rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
)
    );

export default configStore;