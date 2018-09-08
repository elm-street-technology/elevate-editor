// @flow
import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import renderComponent from "../utils/render-component";

import type { $Components } from "../../types";

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "#d0eaff" : "#fff",

  // styles we need to apply on draggables
  ...draggableStyle,
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
          >
            {content.map((props, idx) => (
              <Draggable key={props.id} draggableId={props.id} index={idx}>
                {(provided, snapshot) => (
                  <div
                    className={classes.item}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    onClick={(e) => handleComponentClick(e, props.id)}
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
    maxWidth: "600px", // todo: this should be a setting
    padding: "8px",
    margin: "auto",

    "& > * + *": {
      marginTop: "8px",
    },
  },
  item: {
    display: "flex",
    userSelect: "none",
    border: "2px solid transparent",

    "&:hover": {
      borderColor: "#d0eaff",
    },
  },
}))(Preview);
