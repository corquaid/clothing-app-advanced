// All other reducers go into this root reducer, IMPORTED

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer // this assigns userReducer to handle the state for the user
});
