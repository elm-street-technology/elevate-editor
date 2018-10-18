// @flow

import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";
import classNames from "classnames";

import renderSidebar from "../utils/render-sidebar";

import type { $SidebarProps } from "../../types";

const SidebarLayout = (props: $SidebarProps) => (
  <div className={classNames(props.classes.form, props.className)}>
    <Typography type="heading3">Editing {props.component.type}</Typography>
    {renderSidebar(props)}
  </div>
);

export default withStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "8px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
}))(SidebarLayout);
