// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

import RenderContent from "../../../Internals/RenderContent";
import Placeholder from "../../Row/Placeholder";

import type { $ContentBlock, $Internals } from "types";

type $Props = {|
  classes: Object,
  content: $ContentBlock,
  internals: $Internals,
  parent: $ContentBlock,
|};

const getColor = (color) => {
  switch (typeof color) {
    case "object":
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    default:
      return color || "transparent";
  }
};

class RowPreview extends Component<$Props> {
  renderChildren() {
    const {
      content: parent,
      content: { content, id },
      internals,
    } = this.props;

    if (!(content && content.length) && internals.previewPlaceholders) {
      const renderPlaceholder = (
        <Placeholder
          onClick={(e) => {
            e.stopPropagation();
            internals.addChildToContent(id);
          }}
        />
      );
      return renderPlaceholder;
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
      return renderedChild;
    });
  }

  render() {
    const {
      classes,
      content: { attrs },
      parent,
    } = this.props;
    if (attrs.direction === "horizontal") {
      return (
        <div className={classes.inlineDiv}>
          <table className={classes.tableWrapper}>
            <tr>
              <td className={classes.tableWrapperTd}>
                <table className={classes.tableRow}>
                  <tr>{this.renderChildren()}</tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      );
    } else if (parent && parent.attrs.direction === "horizontal") {
      return <td className={classes.tdRow}>{this.renderChildren()}</td>;
    }
    return (
      <div className={classes.inlineDiv}>
        <table className={classes.tableWrapper}>
          <tr>
            <td className={classes.tableWrapperTd}>
              <table className={classes.tableRow} {...this.tableAttrs()}>
                <tr>
                  <td className={classes.tdColumn}>{this.renderChildren()}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  tableAttrs() {
    const {
      content: { attrs },
    } = this.props;
    return {
      width: `100%`,
      bgcolor: attrs.backgroundColor,
      border: "0",
      cellspacing: "0",
      cellpadding: "0",
    };
  }
}

function getUnpaddedWidth({
  paddingRight,
  paddingLeft,
  calculatedWidth,
}): number {
  return (
    parseInt(calculatedWidth, 10) -
    (parseInt(paddingRight, 10) + parseInt(paddingRight, 10))
  );
}

export default withStyles((theme) => ({
  root: {
    // width: "100%",
    // margin: "0 auto",
    // overflowY: "hidden",
    // overflowX: "scroll",
  },
  inlineDiv: {
    width: ({ content: { attrs } }) => attrs && `${attrs.calculatedWidth}px`,
    display: "inline-block",
    verticalAlign: "bottom",
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      height: "auto !important",
      display: "block !important",
    },
  },
  tableRow: {
    tableLayout: "fixed",
    width: ({ content: { attrs } }) => attrs && `${getUnpaddedWidth(attrs)}px`,
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      tableLayout: "auto !important",
    },
  },
  tdColumn: {
    textAlign: ({ content: { attrs } }) => attrs.alignment,
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      display: "block !important",
      paddingRight: "0 !important",
      paddingLeft: "0 !important",
    },
  },
  tdRow: {
    wordWrap: "normal",
    verticalAlign: "top",
    width: ({ content: { attrs }, internals: { isEditor } }) =>
      !isEditor && attrs && attrs.width,
    // width: ({ content: { attrs }, internals: { isEditor } }) =>
    //   !isEditor && attrs && (attrs.width || "") !== "" && "100%",
    minWidth: "100%",
    height: ({ content: { attrs } }) => attrs && attrs.height,
    minHeight: ({ content: { attrs } }) => attrs && attrs.height,
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
    alignItems: ({ content: { attrs } }) => {
      if (attrs && attrs.direction !== "vertical") {
        return "";
      }
      return attrs.alignment;
    },
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.backgroundColor),
    backgroundImage: ({ content: { attrs } }) =>
      attrs.backgroundImage ? `url(${attrs.backgroundImage})` : "",
    backgroundSize: ({ content: { attrs } }) => attrs.backgroundSize,
    backgroundRepeat: "no-repeat",
    border: ({ content: { attrs } }) =>
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`
        : null,
    textAlign: ({ content: { attrs } }) => attrs.alignment || "left",
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      display: "block !important",
      paddingRight: "0 !important",
      paddingLeft: "0 !important",
    },
  },
  tableWrapper: {
    height: ({ content: { attrs } }) => attrs && attrs.height,
    width: ({ content: { attrs } }) => `${attrs.computedWidth}`,
    backgroundColor: ({ content: { attrs } }) =>
      getColor(attrs.backgroundColor),
    backgroundImage: ({ content: { attrs } }) =>
      attrs.backgroundImage ? `url(${attrs.backgroundImage})` : "",
    backgroundSize: ({ content: { attrs } }) => attrs.backgroundSize,
    backgroundRepeat: "no-repeat",
    border: ({ content: { attrs } }) =>
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`
        : null,
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      tableLayout: "auto !important",
    },
  },
  tableWrapperTd: {
    width: "100%",
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
  },
  row: {
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
    height: ({ content: { attrs } }) => attrs && attrs.height,
    minHeight: ({ content: { attrs } }) => attrs && attrs.height,
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
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${getColor(attrs.borderColor)}`
        : null,
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
      width: "100%",
    },
  },
}))(RowPreview);
