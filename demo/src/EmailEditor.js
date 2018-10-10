import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import { Editor } from "elevate-editor";

type Props = {
  classes: Object,
  className: string,
};

const EmailEditor = ({ classes, className }: Props) => (
  <Paper className={classNames(classes.root, className)}>
    <div>
      <Editor components={[]} />
    </div>
  </Paper>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export default withStyles(styles)(EmailEditor);
