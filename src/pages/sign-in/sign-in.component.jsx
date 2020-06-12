import React from "react";
import { Box, Heading, Button, Stack } from "@chakra-ui/core";

const SignIn = () => {
  return (
    <Box w="80%">
      <Stack spacing={4}>
        <Heading as="h2">Welcome to</Heading>
        <Heading as="h3">Post IT</Heading>
        <Button leftIcon="arrow-forward" width="250px">Sign In with Google</Button>
      </Stack>
    </Box>
  );
};

export default SignIn;
