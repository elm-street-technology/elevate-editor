// @flow

import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import ToolboxItem from "./ToolboxItem";
import SidebarLayout from "./SidebarLayout";

import { Components } from "../utils/render-component";

import type { $Component } from "../../types";

type Props = {
  classes: Object,
  className: string,
  editingComponent: null | $Component,
  onSave: Function,
  cancelEdit: Function,
};

const items = Object.keys(Components).map((type) => ({
  type,
}));

class Toolbox extends Component<Props> {
  renderSidebar() {
    const {
      editingComponent,
      onSave,
      classes,
      className,
      cancelEdit,
    } = this.props;
    return (
      <SidebarLayout
        cancelEdit={cancelEdit}
        component={editingComponent}
        onSave={onSave}
        className={classNames(classes.root, className)}
      />
    );
  }

  render() {
    const { classes, className, editingComponent } = this.props;

    if (editingComponent) {
      return this.renderSidebar();
    }

    return (
      <Droppable droppableId="toolbox" isDropDisabled>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classNames(classes.root, className)}
          >
            {items.map((item, i) => (
              <ToolboxItem key={i} item={item} index={i} />
            ))}
          </div>
        )}
      </Droppable>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    flexShrink: "0",
    width: "100%",
    height: "auto",
    overflowX: "hidden",
    overflowY: "scroll",
    background: "#F5F5F5",
    padding: "8px",
    borderLeft: "1px solid #E0E0E0",

    "& > * + *": {
      marginTop: "8px",
    },
  },
}))(Toolbox);
