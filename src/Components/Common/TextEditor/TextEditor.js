import React, { Component } from "react";
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import withStyles from "elevate-ui/withStyles";
import editorStyles from "./react-draft-wysiwyg-styles";

class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState:
        props.field && props.field.value
          ? EditorState.createWithContent(convertFromRaw(props.field.value))
          : EditorState.createEmpty(),
    };

    this.onEditorStateChange = (editorState) => {
      this.setState({ editorState });
      this.updateFormValue(editorState);
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      !(prevProps.field && prevProps.field.value) &&
      this.props.field &&
      this.props.field.value
    ) {
      this.setState({
        editorState: EditorState.createWithContent(
          convertFromRaw(this.props.field.value)
        ),
      });
    }
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onEditorStateChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  convertUserInput = (editorState) => {
    return convertToRaw(editorState.getCurrentContent());
  };

  onBlur = () => {
    this.updateFormValue();
  };

  updateFormValue(editorState = this.state.editorState) {
    const value = this.convertUserInput(editorState);
    return this.props.form.setFieldValue(this.props.field.name, value);
  }

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "list",
            "textAlign",
            "link",
            "embedded",
            "emoji",
            "image",
            "remove",
            "history",
          ],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
          },
          blockType: {
            options: [
              "Normal",
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "Blockquote",
            ],
          },
        }}
      />
    );
  }
}

const styles = () => editorStyles;

export default withStyles(styles)(TextEditor);
