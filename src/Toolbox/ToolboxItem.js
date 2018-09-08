// @flow
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import {
  ButtonIcon,
  HorizontalRuleIcon,
  IconIcon,
  ImageIcon,
  TableIcon,
  TextIcon,
  VideoIcon,
} from "./Icons";

type Props = {
  classes: Object,
  className: string,
  index: number,
  item: Object,
};

const ComponentsIcons = {
  HorizontalRule: HorizontalRuleIcon,
  Image: ImageIcon,
  Text: TextIcon,
  Row: "div",
  Video: VideoIcon,
  Button: ButtonIcon,
  Table: TableIcon,
  Icon: IconIcon,
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "#d0eaff" : "#fafafa",

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
        <div className={classes.icon}>
          {React.createElement(ComponentsIcons[type])}
        </div>
        <div className={classes.label}>{type}</div>
      </div>
    )}
  </Draggable>
);

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "64px",
    color: "black",
    border: `1px solid #E0E0E0`,
    borderRadius: "4px",
    userSelect: "none",
    padding: "8px",

    "&:hover": {
      boxShadow: theme.globalBoxShadow,
    },
  },
  icon: {
    display: "flex",
    color: "#fff",
    background: "#BDBDBD",
    borderRadius: "4px",
    marginRight: "12px",
  },
  label: {
    fontSize: "16px",
    lineHeight: "1.4",
    fontWeight: "600",
    color: "#424242",
  },
}))(ToolboxItem);
