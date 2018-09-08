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
};

const items = Object.keys(Components).map((type) => ({
  type,
}));

class Toolbox extends Component<Props> {
  renderSidebar() {
    const { editingComponent, onSave, classes, className } = this.props;
    return (
      <SidebarLayout
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
    width: "100%",
    height: "auto",
    overflowX: "hidden",
    overflowY: "scroll",
    padding: "8px",
  },
}))(Toolbox);
