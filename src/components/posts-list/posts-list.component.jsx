import React from "react";
import { useSelector } from "react-redux";
import { SimpleGrid,CircularProgress } from "@chakra-ui/core";

import PostItem from "../post-item/post-item.component";

const PostsList = ({ user }) => {
  const {posts} = useSelector(state => state.posts)
   return (
    <SimpleGrid mt="55rem" mb="20px" p="4">
      {
        posts.length > 0 ? (
          posts.map(post => <PostItem key={post.id} user={post}/>)
        ) : <CircularProgress isIndeterminate color="green"/>
      }
    </SimpleGrid>
  );
};

export default PostsList;
