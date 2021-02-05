import { userActionTypes } from './user.types';

// Create action to handle changes in user state

export const setCurrentUser = user => ({ // don't forget () round brackets for function detail in
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
})
