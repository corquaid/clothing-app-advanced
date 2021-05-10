import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { store, persistor } from './redux/store';

ReactDOM.render(
  // Provider component is the parent of everything within the app and enables the Redux store throughout the rest of the app - redux store is passed as a value to the Provider
  <Provider store={store}> 
      <BrowserRouter>
        <React.StrictMode>
          <PersistGate loading={null} persistor={persistor}> 
            <App />
          </PersistGate>
        </React.StrictMode>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
