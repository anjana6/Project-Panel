import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducer';

// const thunk = [thunk]
const configStore = createStore(rootReducer,applyMiddleware(thunk))

export default configStore;