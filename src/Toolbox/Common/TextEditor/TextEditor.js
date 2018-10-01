import React, { Component } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import withStyles from "elevate-ui/withStyles";
import "../../../styles/editor.css";

import Controls from "./Controls";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState:
        props.field && props.field.value
          ? EditorState.createWithContent(convertFromRaw(props.field.value))
          : EditorState.createEmpty(),
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  convertUserInput = (editorState) => {
    return convertToRaw(editorState.getCurrentContent());
  };

  onBlur = () => {
    const value = this.convertUserInput(this.state.editorState);
    return this.props.form.setFieldValue(this.props.field.name, value);
  };

  render() {
    const { classes } = this.props;
    const { editorState } = this.state;
    return (
      <div className={classes.root}>
        <Controls
          {...this.props}
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <Editor
          handleKeyCommand={this.handleKeyCommand}
          editorState={editorState}
          onChange={this.onChange}
          className={classes.editor}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    backgroundColor: theme.colors["gray400"],
    border: `1px solid ${theme.colors["gray300"]}`,
    "& .DraftEditor-root": {
      height: 400,
    },
  },
});

export default withStyles(styles, { name: "TextEditor" })(TextEditor);
