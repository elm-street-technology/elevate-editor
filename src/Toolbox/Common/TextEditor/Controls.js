import React from "react";
import withStyles from "elevate-ui/withStyles";

import StyleButton from "./StyleButton";
import InsertLink from "elevate-ui-icons/InsertLink";
import FormatBold from "elevate-ui-icons/FormatBold";
import FormatItalic from "elevate-ui-icons/FormatItalic";
import FormatUnderlined from "elevate-ui-icons/FormatUnderlined";

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <FormatBold /> },
  { label: "Italic", style: "ITALIC", icon: <FormatItalic /> },
  { label: "Underlined", style: "UNDERLINE", icon: <FormatUnderlined /> },
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
          icon={type.icon}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
      <StyleButton
        key={"linkToggles"}
        label={<InsertLink />}
        onToggle={(e) => props.promptForLink(e)}
      />
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
