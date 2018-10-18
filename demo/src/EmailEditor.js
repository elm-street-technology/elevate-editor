import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import Editor from "elevate-editor";

type Props = {
  classes: Object,
  className: string,
};

class EmailEditor extends Component<Props> {
  onClick = () => {
    console.log(this.editor.getHTMLContent());
  };
  render() {
    const { classes, className } = this.props;
    return (
      <Paper
        withPadding={false}
        className={classNames(classes.root, className)}
      >
        <Editor
          components={[
            {
              type: "Text",
            },
          ]}
          innerRef={(editor) => {
            this.editor = editor;
          }}
        />
        <Button className={classes.exportButton} onClick={this.onClick}>
          Export to HTML (console.log)
        </Button>
      </Paper>
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
  exportButton: {
    position: "absolute",
    bottom: "8px",
    left: "8px",
  },
});

export default withStyles(styles)(EmailEditor);
