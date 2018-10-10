// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Button from "elevate-ui/Button";

type Props = {
  showURLInput: Function,
};

const Url = ({
  showURLInput,
  onURLChange,
  urlValue,
  onLinkInputKeyDown,
  confirmLink,
  classes,
  removeLink,
}: Props) => {
  if (!showURLInput) {
    return null;
  }

  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        onChange={onURLChange}
        ref={(node) => (this.url = node)}
        type="text"
        value={urlValue}
        onKeyDown={onLinkInputKeyDown}
      />
      <Button type="button" color="secondary" onMouseDown={confirmLink}>
        Confirm
      </Button>
      <Button type="button" color="primary" onMouseDown={removeLink}>
        Remove
      </Button>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    display: "block",
    position: "relative",
    padding: 12,
    left: 0,
    width: "100%",
    height: "auto",
    backgroundColor: theme.colors["gray100"],
    zIndex: 9999,
    "& button + button": { marginLeft: 15 },
  },
  input: {
    display: "block",
    marginBottom: 15,
    width: "100%",
    height: "40px",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: "#fff",
    border: `1px solid ${theme.colors.gray300}`,
    padding: "8px 12px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export default withStyles(styles, { name: "Url" })(Url);
