import React from "react";
import draftToHtml from "draftjs-to-html";
import withStyles from "elevate-ui/withStyles";

const Wysiwyg = ({ value, classes }) => {
  const convertedHTML = draftToHtml(value);
  return (
    <div
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: convertedHTML }}
    />
  );
};

const styles = (theme) => ({
  root: {
    lineHeight: "1.3rem",
    "& strong": {
      fontWeight: 600,
    },
    "& em": {
      fontStyle: "italic",
    },
  },
});

export default withStyles(styles, { name: "Wysiwyg" })(Wysiwyg);
