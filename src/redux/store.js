import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = []; // logger displays state in the console for development purposes

if (process.env.NODE_ENV === 'development') { // depending on the environment (development, production or test) in which node is running, the logger middleware will run, in this case, logger will only run in the development environment. In production or testing, no middleware will be run.
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // use spread operator to pass in array from middleware const

const persistor = persistStore(store); // persisted version of redux store for future access

export { store, persistor }; // default removed as there can only be a single default object exported