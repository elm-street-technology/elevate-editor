import React, { Component } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  CompositeDecorator,
  getDefaultKeyBinding,
} from "draft-js";
import withStyles from "elevate-ui/withStyles";
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
    <a href={url} style={{ textDecoration: "underline", color: "red" }}>
      {props.children} hello- friend.
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
    this.onChange = (editorState) => {
      this.setState({ editorState });
      this.updateFormValue(editorState);
    };
    this.onURLChange = (e) => this.setState({ urlValue: e.target.value });
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
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.state.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.state.editorState) {
        this.onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  getBlockStyle = (block) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  };

  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };

  promptForLink = (e) => {
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

  updateFormValue(editorState = this.state.editorState) {
    const value = this.convertUserInput(editorState);
    return this.props.form.setFieldValue(this.props.field.name, value);
  }

  onBlur = () => {
    this.updateFormValue();
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
          toggleBlockType={this.toggleBlockType}
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
          blockStyleFn={this.getBlockStyle}
          handleKeyCommand={this.handleKeyCommand}
          editorState={editorState}
          keyBindingFn={this.mapKeyToEditorCommand}
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
  "@global": {
    ".DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content": {
      height: "inherit",
      textAlign: "initial",
    },
    ".public-DraftEditor-content[contenteditable=true]": {
      W: "read-write-plaintext-only",
    },
    ".DraftEditor-root": {
      position: "relative",
    },
    ".DraftEditor-editorContainer": {
      backgroundColor: "rgba(255,255,255,0)",
      borderLeft: ".1px solid transparent",
      position: "relative",
      zIndex: "1",
    },
    ".public-DraftEditor-block": {
      position: "relative",
    },
    ".DraftEditor-alignLeft .public-DraftStyleDefault-block": {
      textAlign: "left",
    },
    ".DraftEditor-alignLeft .public-DraftEditorPlaceholder-root": {
      left: "0",
      textAlign: "left",
    },
    ".DraftEditor-alignCenter .public-DraftStyleDefault-block": {
      textAlign: "center",
    },
    ".DraftEditor-alignCenter .public-DraftEditorPlaceholder-root": {
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
    },
    ".DraftEditor-alignRight .public-DraftStyleDefault-block": {
      textAlign: "right",
    },
    ".DraftEditor-alignRight .public-DraftEditorPlaceholder-root": {
      right: "0",
      textAlign: "right",
    },
    ".public-DraftEditorPlaceholder-root": {
      color: "#9197a3",
      position: "absolute",
      zIndex: "1",
    },
    ".public-DraftEditorPlaceholder-hasFocus": {
      color: "#bdc1c9",
    },
    ".DraftEditorPlaceholder-hidden": {
      display: "none",
    },
    ".public-DraftStyleDefault-block": {
      position: "relative",
      whiteSpace: "pre-wrap",
    },
    ".public-DraftStyleDefault-ltr": {
      direction: "ltr",
      textAlign: "left",
    },
    ".public-DraftStyleDefault-rtl": {
      direction: "rtl",
      textAlign: "right",
    },
    ".public-DraftStyleDefault-listLTR": {
      direction: "ltr",
    },
    ".public-DraftStyleDefault-listRTL": {
      direction: "rtl",
    },
    ".public-DraftStyleDefault-ol, .public-DraftStyleDefault-ul": {
      margin: "16px 0",
      padding: "0",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR": {
      marginLeft: "1.5em",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL": {
      marginRight: "1.5em",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR": {
      marginLeft: "3em",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL": {
      marginRight: "3em",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR": {
      marginLeft: "4.5em",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL": {
      marginRight: "4.5em",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR": {
      marginLeft: "6em",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL": {
      marginRight: "6em",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR": {
      marginLeft: "7.5em",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL": {
      marginRight: "7.5em",
    },
    ".public-DraftStyleDefault-unorderedListItem": {
      listStyleType: "square",
      position: "relative",
    },
    ".public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0": {
      listStyleType: "disc",
    },
    ".public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1": {
      listStyleType: "circle",
    },
    ".public-DraftStyleDefault-orderedListItem": {
      listStyleType: "none",
      position: "relative",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before": {
      left: -36,
      position: "absolute",
      textAlign: "right",
      width: 30,
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before": {
      position: "absolute",
      right: -36,
      textAlign: "left",
      width: 30,
    },
    ".public-DraftStyleDefault-orderedListItem:before": {
      content: 'counter(ol0) ". "',
      counterIncrement: "ol0",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before": {
      content: 'counter(ol1) ". "',
      counterIncrement: "ol1",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before": {
      content: 'counter(ol2) ". "',
      counterIncrement: "ol2",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before": {
      content: 'counter(ol3) ". "',
      counterIncrement: "ol3",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before": {
      content: 'counter(ol4) ". "',
      counterIncrement: "ol4",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset": {
      counterReset: "ol0",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset": {
      counterReset: "ol1",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset": {
      counterReset: "ol2",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset": {
      counterReset: "ol3",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset": {
      counterReset: "ol4",
    },
    // eslint-disable-next-line
    ".DraftEditor-root": {
      background: "#fff",
      border: "1px solid #ddd",
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      padding: 15,
    },
    ".DraftEditor-editor": {
      borderTop: "1px solid #ddd",
      cursor: "text",
      fontSize: 16,
      marginTop: 10,
    },
    ".DraftEditor-editor .public-DraftEditorPlaceholder-root, .DraftEditor-editor .public-DraftEditor-content": {
      margin: "0 -15px -15px",
      padding: 15,
    },
    ".DraftEditor-editor .public-DraftEditor-content": {
      minHeight: 100,
    },
    ".DraftEditor-hidePlaceholder .public-DraftEditorPlaceholder-root": {
      display: "none",
    },
    ".DraftEditor-editor .DraftEditor-blockquote": {
      borderLeft: "5px solid #eee",
      color: "#666",
      fontFamily: '"Hoefler Text", "Georgia", serif',
      fontStyle: "italic",
      margin: "16px 0",
      padding: "10px 20px",
    },
    ".DraftEditor-editor .public-DraftStyleDefault-pre": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 20,
    },
    ".DraftEditor-controls": {
      fontFamily: '"Helvetica", sans-serif',
      fontSize: 14,
      marginBottom: 5,
      userSelect: "none",
    },
    ".DraftEditor-styleButton": {
      color: "#999",
      cursor: "pointer",
      marginRight: 16,
      padding: "2px 0",
      display: "inline-block",
    },
    ".DraftEditor-activeButton": {
      color: "#5890ff",
    },
  },
  root: {
    position: "relative",
    backgroundColor: theme.colors["gray400"],
    border: `1px solid ${theme.colors["gray300"]}`,
    "& .DraftEditor-root": {
      minHeight: 400,
    },
    "& blockquote": {
      borderLeft: `4px solid ${theme.colors["gray300"]}`,
      paddingLeft: 24,
    },
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
      listStyleType: "disc",
    },

    "& ul li": {
      marginLeft: "18px",
    },

    "& p": {
      display: "block",
      marginTop: "4px",
      marginBottom: "8px",
      lineHeight: "1.2rem",
    },
    "& span": {
      display: "inline-block",
      marginTop: "4px",
      marginBottom: "8px",
      lineHeight: "1.2em",
    },
    "& img": {
      display: "block",
      maxWidth: "100%",
      marginBottom: "16px",
    },

    "& b": {
      fontWeight: "600",
    },
  },
});

export default withStyles(styles, { name: "TextEditor" })(TextEditor);
