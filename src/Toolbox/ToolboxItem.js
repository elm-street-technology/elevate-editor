// @flow
import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

type Props = {
  classes: Object,
  className: string,
  type: string,
};

const SidebarItem = ({ classes, className, type }: Props) => (
  <div className={classNames(classes.root, className)}>{type}</div>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    background: "gray",
  },
}))(SidebarItem);
