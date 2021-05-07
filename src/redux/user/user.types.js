const UserActionTypes = {
    // now we are creating separate saga user action types for Google sign-in and normal email/password sign-in
    SET_CURRENT_USER: "SET_CURRENT_USER",
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
    CHECK_USER_SESSION: "CHECK_USER_SESSION",
    SIGN_OUT_START: "SIGN_OUT_START",
    SIGN_OUT_SUCCESS: "SIGN_OUT_SUCCESS",
    SIGN_OUT_FAILURE: "SIGN_OUT_FAILURE",
    SIGN_UP_START: "SIGN_UP_START",
    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    SIGN_UP_FAILURE: "SIGN_UP_FAILURE",
};

export default UserActionTypes;
