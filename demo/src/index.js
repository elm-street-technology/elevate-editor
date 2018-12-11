import React from "react";
import { render } from "react-dom";
import ThemeProvider from "elevate-ui/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

render(
  <ThemeProvider
    theme={{
      colors: {},
      overrides: {
        EuiNumberIncrement: {
          root: {
            maxWidth: "160px",
          },
          input: {
            flex: "1",
          },
        },
        EuiScaffold: {
          root: {
            margin: "0 auto",
          },
        },
      },
    }}
  >
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
