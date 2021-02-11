// All other reducers go into this root reducer, IMPORTED

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local storage object as default storage location, sessionStorage also possible

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // we only want to persist the cart reducer as user storage is handled in Firebase
}

// const persistedReducer = persistReducer(persistConfig, )

const rootReducer = combineReducers({
  user: userReducer, // this assigns userReducer to handle the state for the user
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // exporting modified version of the root reducer as well as the persisted state functionality from persistConfig
