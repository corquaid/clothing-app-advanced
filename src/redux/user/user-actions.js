// Create action to handle changes in user state

export const setCurrentUser = user => ({ // don't forget () round brackets for function detail in
  type: 'SET_CURRENT_USER',
  payload: user
})
