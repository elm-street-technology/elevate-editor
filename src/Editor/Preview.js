// @flow
import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import renderComponent from "../utils/render-component";

import type { $Components } from "../../types";

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
  content: $Components,
  handleComponentClick: (Event, string) => void,
};
type State = {};

class Preview extends Component<Props, State> {
  render() {
    const { classes, className, content, handleComponentClick } = this.props;
    return (
      <Droppable droppableId="content">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={classNames(classes.root, className)}
            style={getHoverStyle(snapshot.isDraggingOver)}
          >
            {content.map((props, idx) => (
              <Draggable key={props.id} draggableId={props.id} index={idx}>
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
                    {renderComponent({
                      id: props.id,
                      type: props.type,
                      content: props.content,
                      ...props.attrs,
                      handleComponentClick,
                    })}
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
