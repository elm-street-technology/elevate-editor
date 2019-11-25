/* @flow */

//$FlowIgnore
import { EditorState, Modifier } from "draft-js";
import React, { Component } from "react";
import PropTypes from "prop-types";

import LayoutComponent from "./Component";

type Props = {
  onChange: Function,
  editorState: EditorState,
  modalHandler: Object,
  options: { key: string, label: string }[],
};

type State = {
  expanded: boolean,
};

export default class Placeholders extends Component<Props, State> {
  signalExpanded: boolean;

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    editorState: PropTypes.object,
    modalHandler: PropTypes.object,
    options: PropTypes.array,
  };

  state = {
    expanded: false,
  };

  componentWillMount(): void {
    const { modalHandler } = this.props;
    modalHandler.registerCallBack(this.expandCollapse);
  }

  componentWillUnmount(): void {
    const { modalHandler } = this.props;
    modalHandler.deregisterCallBack(this.expandCollapse);
  }

  onExpandEvent: Function = (): void => {
    this.signalExpanded = !this.state.expanded;
  };

  expandCollapse: Function = (): void => {
    this.setState({
      expanded: this.signalExpanded,
    });
    this.signalExpanded = false;
  };

  doExpand: Function = (): void => {
    this.setState({
      expanded: true,
    });
  };

  doCollapse: Function = (): void => {
    this.setState({
      expanded: false,
    });
  };

  addPlaceholder: Function = (placeholder: string): void => {
    const { editorState, onChange } = this.props;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      placeholder,
      editorState.getCurrentInlineStyle()
    );
    onChange(EditorState.push(editorState, contentState, "insert-characters"));
  };

  render(): Object {
    const { options } = this.props;
    const { expanded } = this.state;
    return (
      <LayoutComponent
        options={options}
        onChange={this.addPlaceholder}
        expanded={expanded}
        onExpandEvent={this.onExpandEvent}
        doExpand={this.doExpand}
        doCollapse={this.doCollapse}
        title="Variables"
      />
    );
  }
}
