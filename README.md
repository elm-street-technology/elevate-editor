# Elevate Editor

Elevate Editor is an open-source, pluggable tool which can be utilized for building custom webpages, email templates, and more.

## Should I Use This?

We are still making frequent changes to the internals and the API that is exposed. Feel free to use this now, but be aware that breaking changes are still likely at this point.

[Demo](https://elevate-editor.netlify.com/)

## Usage

```
yarn add elevate-editor
```

```javascript
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Editor from "elevate-editor";
import ThemeProvider from "elevate-ui/ThemeProvider";
import Paper from "elevate-ui/Paper";

class App extends Component {
  editor;

  render() {
    return (
      <ThemeProvider>
        <Paper>
          <Editor
            components={[]}
            content={[
              {
                type: "Row",
                attrs: {
                  disableDelete: true,
                  height: "600px",
                },
              },
            ]}
            innerRef={(editor) => {
              this.editor = editor;
            }}
          />
          <button
            onClick={() => {
              console.log(this.editor.exportHTML());
            }}
          >
            Export HTML
          </button>
          <button
            onClick={() => {
              console.log(this.editor.exportJSON());
            }}
          >
            Export JSON
          </button>
        </Paper>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
