import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Flex } from "@chakra-ui/core";
import { useSelector, connect } from "react-redux";

import Header from "./components/header/header.component";
import SignIn from "./pages/sign-in/sign-in.component";
import HomePage from "./pages/homepage/homepage.component";

import { checkUserSession } from "./redux/user/user.actions";

const App = ({checkUserSession}) => {
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Flex justify="center" align="center" w="100%" h="93vh">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !currentUser ? <Redirect to="/sign-in" /> : <HomePage />
            }
          />
          <Route
            exact
            path="/sign-in"
            render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
          />
        </Switch>
      </Flex>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};
export default connect(null, mapDispatchToProps)(App);
