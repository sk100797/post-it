import postActionTypes from './posts.types'

export const createPost = (postsObj) => {
    return {
        type: postActionTypes.CREATE_POST,
        payload: postsObj
    }
}