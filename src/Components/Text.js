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
    "& h1": {
      color: "#121130",
      fontWeight: "700",
      letterSpacing: ".2px",
      lineHeight: "2.2rem",
      fontSize: "32px",
      marginTop: "44px",
      marginBottom: "12px",
    },

    "& h2": {
      fontSize: "26px",
      fontWeight: "700",
      lineHeight: "2.2rem",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h3": {
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: "2.2rem",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h4": {
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: "2.2rem",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h5": {
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: "2.2rem",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& h6": {
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: "2.2rem",
      marginTop: "32px",
      marginBottom: "12px",
    },

    "& a": {
      color: "#121130",
      textDecoration: "underline",
    },

    "& ol": {
      position: "relative",
      marginBottom: 20,
      counterReset: "item",
    },

    "& ol li": {
      counterIncrement: "item",
      paddingLeft: "24px",

      "&:before": {
        content: 'counter(item) "."',
        position: "absolute",
        left: "0",
        fontWeight: "700",
      },
    },

    "& ul": {
      marginBottom: 20,
      listStyleType: "disc",
    },

    "& ul li": {
      marginLeft: "18px",
    },

    "& p": {
      marginTop: "4px",
      marginBottom: "8px",
    },

    "& img": {
      display: "block",
      maxWidth: "100%",
      marginBottom: "16px",
    },

    "& b": {
      fontWeight: "600",
    },
    "& blockquote": {
      borderLeft: `4px solid ${theme.colors["gray300"]}`,
      paddingLeft: 24,
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
