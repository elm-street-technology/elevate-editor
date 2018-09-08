// @flow

import React, { Component } from "react";
// import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

type Props = {
  classes: Object,
  className: string,
};
type State = {};

// const Components = [
//   // {
//   //   component: Button,
//   // },
// ];

class Toolbox extends Component<Props, State> {
  render() {
    const { classes, className } = this.props;
    return (
      <div className={classNames(classes.root, className)}>
        <h1>Toolbox</h1>
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
  },
}))(Toolbox);
