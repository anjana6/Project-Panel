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

serviceWorker.unregister();
