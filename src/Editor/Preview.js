// @flow
import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import renderComponent from "../utils/render-component";

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getHoverStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
});

type Props = {
  classes: Object,
  className: string,
  content: Array<Object>,
};
type State = {};

class Preview extends Component<Props, State> {
  render() {
    const { classes, className, content } = this.props;
    return (
      <Droppable droppableId="content">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classNames(classes.root, className)}
            style={getHoverStyle(snapshot.isDraggingOver)}
          >
            {content.map(({ id, type, attrs, content }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {renderComponent({ type, content, attrs })}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
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
}))(Preview);
