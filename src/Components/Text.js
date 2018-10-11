import React from "react";
import draftToHtml from "draftjs-to-html";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

const Text = ({ value, classes, alignment }) => {
  const convertedHTML = draftToHtml(value);
  return (
    <div
      className={classNames(classes.root, classes[alignment])}
      dangerouslySetInnerHTML={{ __html: convertedHTML }}
    />
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
    lineHeight: "1.3rem",
    "& strong": {
      fontWeight: 600,
    },
    "& em": {
      fontStyle: "italic",
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

export default withStyles(styles, { name: "Text" })(Text);
