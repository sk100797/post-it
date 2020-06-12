import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Button, Stack } from "@chakra-ui/core";

import { googleSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ googleSignInStart }) => {
  return (
    <Box w="80%">
      <Stack spacing={4}>
        <Heading as="h2">Welcome to</Heading>
        <Heading as="h3">Post IT</Heading>
        <Button
          leftIcon="arrow-forward"
          width="250px"
          bg="red.500"
          onClick={() => googleSignInStart()}
        >
          Sign In with Google
        </Button>
      </Stack>
    </Box>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
