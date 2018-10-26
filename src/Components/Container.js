// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

type Props = {
  className?: string,
  classes: Object,
  children: any,
  paddingTop?: number,
  paddingRight?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  style?: Object,
};

const Container = ({ className, classes, children, style }: Props) => (
  <div className={classNames(classes.root, className)} style={style}>
    {children}
  </div>
);

const styles = {
  root: {
    display: "block",
    position: "relative",
    width: "100%",
  },
};

export default withStyles(styles, { name: "Container" })(Container);
