// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import Add from "elevate-ui-icons/Add";
import Button from "elevate-ui/Button";

import RenderComponent from "../../Internals/RenderComponent";

import type { $ContentBlock, $Internals } from "types";

type $Props = {|
  classes: Object,
  component: $ContentBlock,
  internals: $Internals,
|};

const getItemStyle = (isDragging: boolean, draggableStyle: Object) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "transparent",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getHoverStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "transparent",
});

class RowPreview extends Component<$Props> {
  renderChildren() {
    const {
      classes,
      component: { attrs, content, id },
      internals,
    } = this.props;

    const isActive = internals.editingContentId === id;
    const children =
      content &&
      content.map((child, idx) => {
        if (!child) {
          return null;
        }

        const renderedChild = (
          <RenderComponent key={idx} internals={internals} component={child} />
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
                  provided.draggableProps.style
                )}
                className={classes.draggable}
                onClick={(e) => internals.handleContentClick(e, child.id)}
              >
                {renderedChild}
              </div>
            )}
          </Draggable>
        );
      });

    if (isActive && children) {
      children.push(
        <Button
          type="button"
          onClick={() =>
            internals.addChildToContent &&
            internals.addChildToContent(id, "Text")
          }
          color="secondary"
          isOutlined
          key="add-component"
          style={{ margin: attrs.direction === "vertical" ? "8px 0" : "0 8px" }}
        >
          <Add size={24} /> Add Component
        </Button>
      );
    }

    return children;
  }

  render() {
    const {
      classes,
      component: { attrs, id },
      internals,
    } = this.props;
    const isActive = internals.editingContentId === id;
    const row = (
      <div className={classes && classes.row}>{this.renderChildren()}</div>
    );
    if (!isActive) {
      return row;
    }
    return (
      <div className={classNames(classes && classes.root)}>
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
    width: "100%",
    margin: "0 auto",
    overflowY: "hidden",
    overflowX: "scroll",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: ({ component: { attrs } }) => attrs && attrs.width,
    minHeight: ({ component: { attrs } }) => attrs && attrs.height,
    flexDirection: ({ component: { attrs } }) =>
      attrs && attrs.direction === "horizontal" ? "row" : "column",
    textAlign: ({ component: { attrs } }) => attrs.alignment || "left",
    paddingTop: ({ component: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ component: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ component: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ component: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
    backgroundColor: ({ component: { attrs } }) => attrs.backgroundColor,
    backgroundImage: ({ component: { attrs } }) =>
      attrs.backgroundImage ? `url(${attrs.backgroundImage})` : "",
    backgroundSize: ({ component: { attrs } }) => attrs.backgroundSize,
    backgroundRepeat: "no-repeat",
    border: ({ component: { attrs } }) =>
      `${attrs.borderSize}px solid ${attrs.borderColor}`,

    [theme.breakpoints[600]]: {
      flexWrap: "no-wrap",
    },
  },
  draggable: {
    border: `1px dashed ${theme.colors.secondary}`,
    margin: "2px",
  },
}))(RowPreview);
