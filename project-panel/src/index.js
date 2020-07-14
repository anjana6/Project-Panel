import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {conStore,rrfPorps} from './conStore';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={conStore}>
      <ReactReduxFirebaseProvider {...rrfPorps}>
        <App />
      </ReactReduxFirebaseProvider>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
