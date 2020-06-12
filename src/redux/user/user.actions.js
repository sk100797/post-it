import userActionTypes from "./user.types";

export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: userActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
};

export const signOutStart = () => {
  return {
    type: userActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: userActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};
