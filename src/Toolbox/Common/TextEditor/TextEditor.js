import React, { Component } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
} from "draft-js";
import withStyles from "elevate-ui/withStyles";
// import "../../../styles/editor.css";

import Controls from "./Controls";
import Url from "./Url";

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} style={{ textDecoration: "underline" }}>
      {props.children} hay
    </a>
  );
};

class TextEditor extends Component {
  constructor(props) {
    super(props);

    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      },
    ]);

    this.state = {
      editorState:
        props.field && props.field.value
          ? EditorState.createWithContent(convertFromRaw(props.field.value))
          : EditorState.createEmpty(decorator),
      showURLInput: false,
      urlValue: "",
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
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

  promptForLink = (e) => {
    console.log("promptForLink");
    // e.preventDefault();
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      let url = "";
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }
      this.setState({
        showURLInput: true,
        urlValue: url,
      });
    }
  };

  confirmLink = (e) => {
    e.preventDefault();
    const { editorState, urlValue } = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: urlValue }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    this.setState(
      {
        editorState: RichUtils.toggleLink(
          newEditorState,
          newEditorState.getSelection(),
          entityKey
        ),
        showURLInput: false,
        urlValue: "",
      },
      () => {
        setTimeout(() => this.editor.focus(), 0);
      }
    );
  };

  onLinkInputKeyDown = (e) => {
    if (e.which === 13) {
      this.confirmLink(e);
    }
  };

  removeLink = (e) => {
    e.preventDefault();
    const { editorState } = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.setState({
        editorState: RichUtils.toggleLink(editorState, selection, null),
      });
    }
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
          promptForLink={this.promptForLink}
        />
        <Url
          showURLInput={this.state.showURLInput}
          onURLChange={this.onURLChange}
          urlValue={this.state.urlValue}
          onLinkInputKeyDown={this.onLinkInputKeyDown}
          confirmLink={this.confirmLink}
          removeLink={this.removeLink}
        />
        <Editor
          handleKeyCommand={this.handleKeyCommand}
          editorState={editorState}
          onChange={this.onChange}
          className={classes.editor}
          onBlur={this.onBlur}
          ref={(node) => (this.editor = node)}
        />
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.colors["gray400"],
    border: `1px solid ${theme.colors["gray300"]}`,
    "& .DraftEditor-root": {
      height: 400,
    },
  },
});

export default withStyles(styles, { name: "TextEditor" })(TextEditor);
