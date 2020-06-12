import { takeLatest, all, call } from "redux-saga/effects";

import postActionTypes from "./posts.types";
import { createPostInFirebase } from "../../firebase/firebase.utils";

export function* createPost(payload) {
  try {
    yield call(createPostInFirebase, payload);
  } catch (error) {
    console.log(error.message);
  }
}

export function* onCreatePost() {
  yield takeLatest(postActionTypes.CREATE_POST, createPost);
}

export function* postsSagas() {
  yield all([call(onCreatePost)]);
}
