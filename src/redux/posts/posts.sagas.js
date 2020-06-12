import { takeLatest, all, call, put } from "redux-saga/effects";

import postActionTypes from "./posts.types";
import { createPostInFirebase, firestore } from "../../firebase/firebase.utils";

import { fetchPostsFailure, fetchPostsSuccess,fetchPosts } from "./posts.actions";

export function* createPost(payload) {
  try {
    yield call(createPostInFirebase, payload);
    yield put(fetchPosts())
  } catch (error) {
    console.log(error.message);
  }
}

export function* onCreatePost() {
  yield takeLatest(postActionTypes.CREATE_POST, createPost);
}

export function* fetchPostsAsync() {
  try {
    const collectionRef = yield firestore.collection("posts");
    const snapshot = yield collectionRef.get();
    const transformedCollection = snapshot.docs.map((doc) => {
      const { displayName, photoURL, postText, createdAt } = doc.data();
      return {
        id: doc.id,
        displayName,
        photoURL,
        postText,
        createdAt,
      };
    });
    yield put(fetchPostsSuccess(transformedCollection));
  } catch (error) {
    yield put(fetchPostsFailure(error));
  }
}

export function* onFetchPost() {
  yield takeLatest(postActionTypes.FETCH_POST, fetchPostsAsync);
}

export function* postsSagas() {
  yield all([call(onCreatePost), call(onFetchPost)]);
}
