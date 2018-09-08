// @flow

import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

import renderSidebar from "../utils/render-sidebar";

import type { $SidebarProps } from "../../types";

const SidebarLayout = (props: $SidebarProps) => (
  <div className={classNames(props.classes.form, props.className)}>
    <h1 className={props.classes.header}>Editing {props.component.type}</h1>
    {renderSidebar(props)}
    <div className={props.classes.debug}>
      component ID: {props.component.id}
    </div>
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
  debug: {
    position: "absolute",
    bottom: "0",
    marginBottom: "8px",
    fontStyle: "italic",
    fontSize: "12px",
    color: "#333",
  },
}))(SidebarLayout);
