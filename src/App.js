import React, { Component } from "react";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Editor from "./Editor";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Editor />
      </ThemeProvider>
    );
  }
}

export default App;
