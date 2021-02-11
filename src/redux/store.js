import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // use spread operator to pass in array from middleware const

const persistor = persistStore(store); // persisted version of redux store for future access

export { store, persistor }; // default removed as there can only be a single default object exported