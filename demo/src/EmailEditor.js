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
    console.log(this.editor);
  };
  render() {
    const { classes, className } = this.props;
    return (
      <Paper className={classNames(classes.root, className)}>
        <Editor
          components={[]}
          innerRef={(editor) => {
            this.editor = editor;
          }}
        />
        <Button onClick={this.onClick}>Click me</Button>
      </Paper>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export default withStyles(styles)(EmailEditor);
