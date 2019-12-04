// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

type $Props = {
  classes: Object,
  className: string,
  icon?: any,
  label: string,
};

const ToolboxItem = ({ classes, className, icon, label }: $Props) => (
  <div className={classNames(classes.root, className)}>
    {icon ? <div className={classes.icon}>{icon}</div> : null}
    <div className={classes.label}>{label}</div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "64px",
    color: "black",
    border: `1px solid #E0E0E0`,
    borderRadius: "4px",
    userSelect: "none",
    padding: "8px",

    "&:hover": {
      boxShadow: theme.globalBoxShadow,
    },
  },
  icon: {
    display: "flex",
    color: "#fff",
    background: "#BDBDBD",
    borderRadius: "4px",
    marginRight: "12px",
  },
  label: {
    fontSize: "16px",
    lineHeight: "1.4",
    fontWeight: "600",
    color: "#424242",
  },
}))(ToolboxItem);
