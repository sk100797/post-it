import postActionTypes from "./posts.types";

const INITIAL_STATE = {
  posts: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case postActionTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
