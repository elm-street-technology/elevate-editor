// @flow
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

type Props = {
  classes: Object,
  className: string,
  index: number,
  item: Object,
};

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#fafafa",
  borderRadius: "3px",
  borderColor: "#ddd",
  color: "black",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const ToolboxItem = ({ classes, className, item: { type }, index }: Props) => (
  <Draggable key={index} draggableId={type} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={classNames(classes.root, className)}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        {type}
      </div>
    )}
  </Draggable>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    "&:hover": {
      boxShadow: "0px 2px 1px",
    },
    // background: "gray",
  },
}))(ToolboxItem);
