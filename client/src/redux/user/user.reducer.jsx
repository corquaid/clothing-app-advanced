import UserActionTypes from "./user.types.js";

// Set initial state when app loads for the first time before any actions have fired
const INITIAL_STATE = {
    currentUser: null,
    error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    // note default value of state passed in as argument (ES6 feature)
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS: // check reducer action type, if it matches, then enter the switch statement
            return {
                ...state,
                currentUser: action.payload, // return payload as new state
                error: null, // if successful, clear any previous error
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
