// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";

import RenderContent from "../../Internals/RenderContent";
import Placeholder from "./Placeholder";

import type { $ContentBlock, $Internals } from "types";

type $Props = {|
  classes: Object,
  content: $ContentBlock,
  internals: $Internals,
  refCallback: () => void,
|};

const getColor = (color) => {
  switch (typeof color) {
    case "object":
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    default:
      return color || "transparent";
  }
};

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: Object,
  child: Object
) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "transparent",
  width: child && child.attrs && child.attrs.width,
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getHoverStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "transparent",
  width: "100%",
});

class RowPreview extends Component<$Props> {
  renderChildren() {
    const {
      classes,
      content: parent,
      content: { content, id },
      internals,
    } = this.props;

    const isActive = internals.editingContentId === id;
    if (!(content && content.length)) {
      if (!(internals.isEditor || internals.previewPlaceholders)) {
        return null;
      }

      return (
        <Placeholder
          onClick={(e) => {
            e.stopPropagation();
            internals.addChildToContent(id);
          }}
        />
      );
    }
    return content.map((child, idx) => {
      if (!child) {
        return null;
      }

      const renderedChild = (
        <RenderContent
          key={idx}
          internals={internals}
          content={[child]}
          parent={parent}
        />
      );
      if (!isActive || content.length === 1) {
        // content === 1 check because we don't want to show something as draggable when there are no other siblings to sort against
        return renderedChild;
      }

      return (
        <Draggable key={child.id} draggableId={child.id} index={idx}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getItemStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
                child
              )}
              className={classes.draggable}
            >
              {renderedChild}
            </div>
          )}
        </Draggable>
      );
    });
  }

  render() {
    const {
      classes,
      content: { attrs, id },
      internals: { editingContentId },
      refCallback,
    } = this.props;
    const isActive = editingContentId === id;
    const row = (
      <div className={classes && classes.row} ref={refCallback}>
        {this.renderChildren()}
      </div>
    );
    if (!isActive) {
      return row;
    }
    return (
      <div className={classNames(classes.root)}>
        <Droppable droppableId={id} direction={attrs.direction || "vertical"}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getHoverStyle(snapshot.isDraggingOver)}
            >
              {row}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    width: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs && (attrs.width || "") !== "" && "100%",
    minHeight: ({ content: { attrs } }) => attrs && attrs.height,
  },
  row: {
    display: "flex",
    flexWrap: ({ content: { attrs } }) =>
      attrs.direction === "horizontal" ? "wrap" : "nowrap",
    justifyContent: ({ content: { attrs } }) => {
      if (attrs && attrs.direction !== "horizontal") {
        return "";
      }

      if (!attrs.alignment || attrs.alignment === "left") {
        return "flex-start";
      } else if (attrs.alignment === "center") {
        return "space-around";
      } else if (attrs.alignment === "right") {
        return "space-around";
      }
    },
    alignItems: ({ content: { attrs } }) => {
      if (attrs && attrs.direction !== "vertical") {
        return "";
      }
      if (!attrs.alignment) {
        return "stretch";
      } else if (attrs.alignment === "left") {
        return "flex-start";
      } else if (attrs.alignment === "center") {
        return "center";
      } else if (attrs.alignment === "right") {
        return "flex-end";
      }
    },
    maxWidth: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs && attrs.width,
    width: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs && (attrs.width || "") !== "" && "100%",
    minWidth: "100%",
    minHeight: ({ content: { attrs } }) => attrs && attrs.height,
    flexDirection: ({ content: { attrs } }) =>
      attrs && attrs.direction === "horizontal" ? "row" : "column",
    textAlign: ({ content: { attrs } }) => attrs.alignment || "left",
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.backgroundColor),
    backgroundImage: ({ content: { attrs } }) =>
      attrs.backgroundImage ? `url(${attrs.backgroundImage})` : "",
    backgroundSize: ({ content: { attrs } }) => attrs.backgroundSize,
    backgroundRepeat: "no-repeat",
    border: ({ content: { attrs } }) =>
      `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`,
    [theme.breakpoints(768)]: {
      minWidth: "auto",
    },
    [theme.breakpoints(992)]: {
      minWidth: "auto",
      // flexWrap: "nowrap",
    },
  },
  draggable: {
    alignItems: ({ content: { attrs } }) => {
      if (attrs && attrs.direction !== "vertical") {
        return "";
      }
      if (!attrs.alignment) {
        return "stretch";
      } else if (attrs.alignment === "left") {
        return "flex-start";
      } else if (attrs.alignment === "center") {
        return "center";
      } else if (attrs.alignment === "right") {
        return "flex-end";
      }
    },
    // border: `1px dashed ${theme.colors.secondary}`,
    // margin: "2px",
    "& > *": {
      width: "100% !important",
    },
  },
}))(RowPreview);
