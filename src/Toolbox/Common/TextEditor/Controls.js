import React from "react";
import withStyles from "elevate-ui/withStyles";

import StyleButton from "./StyleButton";
import InsertLink from "elevate-ui-icons/InsertLink";
import FormatBold from "elevate-ui-icons/FormatBold";
import FormatItalic from "elevate-ui-icons/FormatItalic";
import FormatUnderlined from "elevate-ui-icons/FormatUnderlined";
import FormatListBulleted from "elevate-ui-icons/FormatListBulleted";
import FormatListNumbered from "elevate-ui-icons/FormatListNumbered";
import FormatQuote from "elevate-ui-icons/FormatQuote";

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote", icon: <FormatQuote /> },
  { label: "UL", style: "unordered-list-item", icon: <FormatListBulleted /> },
  { label: "OL", style: "ordered-list-item", icon: <FormatListNumbered /> },
];

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <FormatBold /> },
  { label: "Italic", style: "ITALIC", icon: <FormatItalic /> },
  { label: "Underlined", style: "UNDERLINE", icon: <FormatUnderlined /> },
];

const Controls = (props) => {
  const { classes, editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className={classes.root}>
      <div>
        {BLOCK_TYPES.map((type) => (
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            icon={type.icon}
            onToggle={props.toggleBlockType}
            style={type.style}
          />
        ))}
      </div>
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
        icon={<InsertLink />}
        label="Link"
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
