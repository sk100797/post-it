import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, FormLabel, Textarea, Button } from "@chakra-ui/core";

import { createPost } from "../../redux/posts/posts.actions";

const PostForm = () => {
  const [postText, setPostText] = useState();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { displayName, photoURL } = currentUser;
  const handleSubmit = (event) => {
    event.preventDefault();
    const postObj = {
      displayName,
      photoURL,
      postText,
    };
    setPostText("")
    dispatch(createPost(postObj));

  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <FormControl bg="white" position="fixed" top="20" width="100%" p={4}>
        <FormLabel>Post Something</FormLabel>
        <Textarea
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
          size="lg"
          resize="none"
        />
        <Button size="lg" mt={4} variantColor="teal" type="submit">
          Post It
        </Button>
      </FormControl>
    </form>
  );
};

export default PostForm;
