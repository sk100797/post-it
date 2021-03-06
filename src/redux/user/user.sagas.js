import { takeLatest, all, put, call } from "redux-saga/effects";

import userActionTypes from "./user.types";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onSignOutStart), call(onCheckUserSession)]);
}
