import React from "react";
import { useSelector } from "react-redux";

import PostsList from '../../components/posts-list/posts-list.component'
import PostForm from '../../components/post-form/post-form.component'

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <PostForm />
      <PostsList user={currentUser}/>
    </div>
  );
};

export default HomePage;
