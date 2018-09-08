// @flow

import React, { Component } from "react";
// import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import ToolboxItem from "./ToolboxItem";

type Props = {
  classes: Object,
  className: string,
};
type State = {};

const items = [
  {
    type: "Image",
  },
  {
    type: "Text",
  },
  {
    type: "HorizontalRule",
  },
];

class Toolbox extends Component<Props, State> {
  render() {
    const { classes, className } = this.props;
    return (
      <div className={classNames(classes.root, className)}>
        <h1>Toolbox</h1>
        {items.map((item) => <ToolboxItem type={item.type} />)}
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    overflowX: "hidden",
    overflowY: "scroll",
    padding: "8px",
  },
}))(Toolbox);
