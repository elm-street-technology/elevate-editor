// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
//$FlowIgnore
import { Droppable, Draggable } from "react-beautiful-dnd";
import classNames from "classnames";

import RenderContent from "../../../Internals/RenderContent";
import Placeholder from "../../Row/Placeholder";

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

class WrapperPreview extends Component<$Props> {
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
      internals: { editingContentId, isEditor, previewPlaceholders },
      refCallback,
    } = this.props;
    if (isEditor || previewPlaceholders) {
      const isActive = editingContentId === id;
      const row = (
        <div className={classes.container} ref={refCallback}>
          <div className={classes.innerContainer}>{this.renderChildren()}</div>
          {attrs.footer && <div className={classes.footer}>{attrs.footer}</div>}
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
    return (
      <table className={classes.tableWrapper} {...this.wrapperAttrs()}>
        <tbody>
          <tr>
            <td className={classes.tdWrapper}>
              <table
                {...this.innerAttrs()}
                className={classes.innerContainerTable}
              >
                <tbody>
                  <tr>
                    <td>{this.renderChildren()}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {attrs.footer && (
            <tr>
              <td className={classes.footer}>{attrs.footer}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  innerAttrs() {
    const {
      content: { attrs },
    } = this.props;
    return {
      width: `${attrs.width}px`,
      bgcolor: attrs.innerBackgroundColor,
      border: "0",
      cellSpacing: "0",
      cellPadding: "0",
    };
  }

  wrapperAttrs() {
    const {
      content: { attrs },
    } = this.props;
    return {
      width: `100%`,
      bgcolor: attrs.backgroundColor,
      border: "0",
      cellSpacing: "0",
      cellPadding: "0",
    };
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    width: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs && (attrs.width || "") !== "" && "100%",
    minHeight: ({ content: { attrs } }) => attrs && attrs.height,
  },
  tableWrapper: {
    backgroundColor: ({ content: { attrs } }) => attrs.backgroundColor,
    textSizeAdjust: "100%",
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      tableLayout: "auto !important",
    },
    fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', Arial, sans-serif",
    fontWeight: "400",
  },
  tdWrapper: {
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
  },
  footer: {
    textAlign: "center",
    paddingTop: ({ content: { attrs }, internals: { isEditor } }) =>
      isEditor && attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingBottom: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
  },
  innerContainerTable: {
    margin: "0 auto",
    width: ({ content: { attrs } }) => attrs && `${attrs.width}px`,
    tableLayout: "fixed",
    border: ({ content: { attrs } }) =>
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`
        : null,
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.innerBackgroundColor),
    "@media only screen and (max-width: 675px)": {
      width: "auto !important",
      tableLayout: "auto !important",
    },
  },
  innerContainer: {
    width: ({ content: { attrs } }) => attrs && `${attrs.width}px`,
    border: ({ content: { attrs } }) =>
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`
        : null,
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.innerBackgroundColor),
  },
  container: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', Arial, sans-serif",
    fontWeight: "500",
    minWidth: ({ content: { attrs } }) =>
      `${675 + attrs.paddingLeft + attrs.paddingRight}px`,
    flexDirection: "column",
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.backgroundColor),
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
  },
  draggable: {
    alignItems: "center",
    // margin: "2px",
    "& > *": {
      width: "100% !important",
    },
  },
}))(WrapperPreview);
