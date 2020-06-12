import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

import App from "./App";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ColorModeProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
