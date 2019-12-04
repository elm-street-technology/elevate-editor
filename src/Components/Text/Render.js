import React from "react";
import draftToHtml from "draftjs-to-html";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import WYSIWYGFormatting from "../Common/TextEditor/WYSIWYGFormatting";
import stringReplace from "../../utils/string-replace";

const TextPreview = ({
  content: { attrs },
  classes,
  internals: { replacements },
}) => {
  return (
    <div
      className={classNames(classes.root, classes[attrs.alignment])}
      dangerouslySetInnerHTML={{
        __html: stringReplace(draftToHtml(attrs.value), replacements),
      }}
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
    paddingTop: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    paddingRight: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    paddingBottom: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    paddingLeft: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
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
