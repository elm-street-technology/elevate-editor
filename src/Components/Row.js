// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { Droppable, Draggable } from "react-beautiful-dnd";

import renderComponent from "../utils/render-component";

import type { $Component } from "../../types";

type Props = $Component & {
  classes: Object,
  handleComponentClick: (Event, string) => void,
};

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 ${grid}px`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#fafafa",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getHoverStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "#fafafa",
});

class Row extends Component<Props> {
  renderChildren() {
    const { classes, content, handleComponentClick } = this.props;
    return (
      content &&
      content.map((child, idx) => (
        <Draggable key={child.id} draggableId={child.id} index={idx}>
          {(provided, snapshot) => (
            <div
              className={classes && classes.item}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style
              )}
              onClick={(e) => handleComponentClick(e, child.id)}
            >
              {renderComponent({
                id: child.id,
                type: child.type,
                content: child.content,
                ...child.attrs,
                handleComponentClick,
              })}
            </div>
          )}
        </Draggable>
      ))
    );
  }

  render() {
    const { id, classes } = this.props;
    return (
      <div className={classes && classes.root}>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getHoverStyle(snapshot.isDraggingOver)}
              className={classes && classes.row}
            >
              {this.renderChildren()}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "8px",
  },
  row: {
    display: "flex",
  },
  item: {
    margin: "0 8px",
    "&:hover": {
      outline: "#f15953 solid 2px",
    },
  },
}))(Row);
