import React, { useEffect } from "react";
import {  connect } from "react-redux";

import PostsList from "../../components/posts-list/posts-list.component";
import PostForm from "../../components/post-form/post-form.component";

import { fetchPosts } from "../../redux/posts/posts.actions";

const HomePage = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <PostForm />
      <PostsList />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};
export default connect(null, mapDispatchToProps)(HomePage);
