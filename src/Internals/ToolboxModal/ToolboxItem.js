// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

const ToolboxItem = ({
  active,
  classes,
  className,
  icon,
  label,
  type,
  handleComponentClick,
}) => (
  <div
    onClick={() => handleComponentClick(type)}
    className={classNames(classes.root, active && classes.active, className)}
  >
    {icon ? <div className={classes.icon}>{icon}</div> : null}
    <div className={classes.label}>{label}</div>
  </div>
);

export default withStyles((theme) => ({
  root: {
    flexShrink: "0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    color: "black",
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: "4px",
    userSelect: "none",
    padding: "12px 16px",

    "&:hover": {
      backgroundColor: theme.colors["gray100"],
    },
  },
  active: {
    backgroundColor: theme.colors["gray200"],
    "&:hover": {
      backgroundColor: theme.colors["gray200"],
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
