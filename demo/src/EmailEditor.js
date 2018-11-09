import React, { Component, Fragment } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import Editor from "elevate-editor";

import SignatureBlock from "./Components/SignatureBlock";
import { elevateUI } from "./templates";

type Props = {
  classes: Object,
  className: string,
};

class EmailEditor extends Component<Props> {
  exportHTML = () => {
    console.log(this.editor.exportHTML());
  };
  exportJSON = () => {
    console.log(JSON.stringify(this.editor.exportJSON()));
  };

  render() {
    const { classes, className } = this.props;
    return (
      <Fragment>
        <Paper
          withPadding={false}
          className={classNames(classes.root, className)}
        >
          <Editor
            components={[SignatureBlock]}
            content={elevateUI || []}
            innerRef={(editor) => {
              this.editor = editor;
            }}
          />
        </Paper>
        <div className={classes.flex}>
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
