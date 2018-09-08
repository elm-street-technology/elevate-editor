// @flow

import React from "react";
import withStyles from "elevate-ui/withStyles";

import renderSidebar from "../utils/render-sidebar";

import type { $SidebarProps } from "../../types";

const SidebarLayout = (props: $SidebarProps) => (
  <div className={props.classes.form}>
    <h1 className={props.classes.header}>Editing {props.component.type}</h1>
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
