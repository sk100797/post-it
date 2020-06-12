import React from "react";
import {Flex} from '@chakra-ui/core'

import Header from "./components/header/header.component";
import SignIn from "./pages/sign-in/sign-in.component";

const App = () => {
  return (
    <div>
      <Header />
      <Flex justify="center" align="center" w="100%" h="93vh">
      <SignIn />
      </Flex>
    </div>
  );
};

export default App;
