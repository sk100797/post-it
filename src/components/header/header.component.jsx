import React from "react";
import {
  Flex,
  Heading,
  Box,
  Icon,
  useColorMode,
} from "@chakra-ui/core";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
const bgColor = {light: "white", dark: "gray.800"}
const icon = {light: "moon", dark: "sun"}
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      position="fixed"
      top="0"
      width="100%"
      padding="4"
      overflow="hidden"
      bg={bgColor[colorMode]}
      borderBottom="1px"
      borderBottomColor="gray.100"
    >
      <Flex align="center" mr={5}>
      <Icon name="edit" mr={5} size="24px" color="green.400"/>
        <Heading as="h1" size="lg">
          Post IT
        </Heading>
      </Flex>
      
      <Box>
        <Icon name={icon[colorMode]} onClick={toggleColorMode} size="24px" cursor="pointer"/>
      </Box>
    </Flex>
  );
};

export default Header;
