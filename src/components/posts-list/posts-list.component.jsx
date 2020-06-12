import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

import PostItem from "../post-item/post-item.component";

const PostsList = ({user}) => {
    console.log(user)
  return (
    <SimpleGrid mt="55rem" mb="20px" p="4">
      <PostItem user={user}/>
      <PostItem user={user}/>
      <PostItem user={user}/>
      <PostItem user={user}/>
    </SimpleGrid>
  );
};

export default PostsList;
