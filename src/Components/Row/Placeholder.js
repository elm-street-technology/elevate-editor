// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import AddCircleOutline from "elevate-ui-icons/AddCircleOutline";

type Props = {
  classes: Object,
  className: string,
  theme: Object,
};

const Placeholder = ({ classes, className, theme, ...rest }: Props) => (
  <div className={classNames(classes.root, className)} {...rest}>
    <AddCircleOutline color={theme.colors.gray800} size={20} />
    <span className={classes.text}>Add Component</span>
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: "rgba(0, 85, 172, 0.1)",
    padding: "8px",
    border: "1px dashed rgba(0, 85, 172, 0.5)",
  },
  text: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "600",
    color: theme.colors.gray800,
    textAlign: "center",
  },
});

export default withStyles(styles)(Placeholder);
