import React from "react";
import { Box, Flex, Text, Avatar, Divider } from "@chakra-ui/core";

const PostItem = ({ user }) => {
  return (
    <Box maxW="sm" mt="10px" borderWidth="1px" rounded="lg" overflow="hidden" shadow="md">
      <Flex p="4">
        <Avatar src={user.photoURL} />
        <Box ml="3">
          <Text fontWeight="bold">{user.displayName}</Text>
          <Text fonstSize="sm">
            {user.createdAt.toDate().toDateString()}
          </Text>
        </Box>
      </Flex>
      <Divider />
      <Text p="4">
        Lorem ipsim is placegorldaf.Note that the development build is not
        optimized. To create a production build, use yarn build.
      </Text>
    </Box>
  );
};

export default PostItem;
