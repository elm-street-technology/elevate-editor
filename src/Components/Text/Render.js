import React from "react";
import draftToHtml from "draftjs-to-html";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import WYSIWYGFormatting from "../Common/TextEditor/WYSIWYGFormatting";

const TextPreview = ({ content: { attrs }, classes }) => {
  return (
    <div
      className={classNames(classes.root, classes[attrs.alignment])}
      dangerouslySetInnerHTML={{ __html: draftToHtml(attrs.value) }}
    />
  );
};

const styles = (theme) => ({
  root: {
    color: ({ content: { attrs } }) => attrs && attrs.color,
    width: "100%",
    lineHeight: "1.3rem",
    textAlign: "left",
    ...WYSIWYGFormatting,
    "& > *": {
      color: "inherit !important",
    },
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export default withStyles(styles, { name: "TextPreview" })(TextPreview);
