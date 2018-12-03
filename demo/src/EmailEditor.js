import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/server";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import Editor from "elevate-editor";
import { Tools } from "elevate-editor";

import SignatureBlock from "./Components/SignatureBlock";
import { elevateUI } from "./templates/grid";

type Props = {
  classes: Object,
  className: string,
};

type State = {
  step: "editor" | "preview",
  conent: Object[],
};

class EmailEditor extends Component<Props, State> {
  state = {
    step: "editor",
    content: elevateUI || [],
  };
  exportHTML = () => {
    console.log(this.editor.exportHTML());
  };
  exportJSON = () => {
    console.log(JSON.stringify(this.editor.exportJSON()));
  };

  togglePreview() {
    const { step: lastStep, content: oldContent } = this.state;
    const step = lastStep === "editor" ? "preview" : "editor";
    const content =
      lastStep === "editor" ? this.editor.exportJSON() : oldContent;
    this.setState({
      step,
      content,
    });
  }

  renderPreview() {
    const { content } = this.state;
    const html = ReactDOM.renderToString(Tools.renderReact(content, []));

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    );
  }
  renderEditor() {
    const { content } = this.state;
    return (
      <Editor
        components={[SignatureBlock]}
        content={content}
        innerRef={(editor) => {
          this.editor = editor;
        }}
      />
    );
  }

  render() {
    const { classes, className } = this.props;
    const { step } = this.state;
    return (
      <Fragment>
        <Paper
          withPadding={false}
          className={classNames(classes.root, className)}
        >
          {step === "editor" ? this.renderEditor() : this.renderPreview()}
        </Paper>
        <div className={classes.flex}>
          <Button
            className={classes.button}
            onClick={this.togglePreview.bind(this)}
          >
            {step === "editor" ? "Preview" : "Editor"}
          </Button>
          <Button className={classes.button} onClick={this.exportHTML}>
            Export to HTML (console.log)
          </Button>
          <Button className={classes.button} onClick={this.exportJSON}>
            Export to JSON (console.log)
          </Button>
        </div>
      </Fragment>
    );
  }
}

const styles = (theme) => ({
  root: {
    position: "relative",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden", // round corners
  },
  flex: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    margin: "8px",
  },
});

export default withStyles(styles)(EmailEditor);
