import React from "react";
import withStyles from "elevate-ui/withStyles";

import StyleButton from "./StyleButton";

const INLINE_STYLES = [
  { label: "B", style: "BOLD" },
  { label: "I", style: "ITALIC" },
  { label: "U", style: "UNDERLINE" },
  { label: "</>", style: "CODE" },
];

const Controls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  const { classes } = props;
  return (
    <div className={classes.root}>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const styles = (theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default withStyles(styles, { name: "Controls" })(Controls);
