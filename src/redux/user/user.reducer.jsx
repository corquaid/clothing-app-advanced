// Set initial state when app loads for the first time before any actions have fired
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { // note default value of state passed in as argument (ES6 feature)
  switch (action.type) {
    case 'SET_CURRENT_USER': // check reducer action type, if it matches, then enter the switch statement
      return {
        ...state,
        currentUser: action.payload // return payload as new state
      }
    default:
      return state; 
  }  
}

export default userReducer;