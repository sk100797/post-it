import postActionTypes from "./posts.types";

export const createPost = (postsObj) => {
  return {
    type: postActionTypes.CREATE_POST,
    payload: postsObj,
  };
};

export const fetchPosts = () => {
  return {
    type: postActionTypes.FETCH_POST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: postActionTypes.FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: postActionTypes.FETCH_POST_FAILURE,
    payload: error,
  };
};
