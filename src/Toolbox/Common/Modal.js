// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import classNames from "classnames";

type Props = {
  isOpen?: boolean,
  className?: Object,
  classes: Object,
  innerClassName?: Object,
  children: any,
};

class Modal extends Component<Props> {
  render() {
    const { children, classes, isOpen, innerClassName } = this.props;
    return (
      <div className={classNames(classes.mask, isOpen && classes.maskActive)}>
        <Paper className={classNames(classes.modal, innerClassName)}>
          {children}
        </Paper>
      </div>
    );
  }
}

const styles = (theme) => ({
  mask: {
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  maskActive: {
    display: "flex",
  },
  modal: {
    width: "100%",
    maxWidth: 450,
  },
});

export default withStyles(styles, { name: "Modal" })(Modal);
