import React from "react";
import { useSelector } from "react-redux";
import { Box, Image } from "@chakra-ui/core";

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <Image src={currentUser.photoURL} alt="User Image"></Image>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h1"
          lineHeight="tight"
          isTruncated
        >
          Welcome {currentUser.displayName.split(" ")[0]}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
