// @flow
import React from "react";
import EUIButton from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";

import type { $ContentBlock } from "types";
type $Props = {
  component: $ContentBlock,
  classes: Object,
};

const ButtonPreview = ({
  classes,
  component: {
    attrs,
    attrs: {
      color,
      href,
      children,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontSize,
      backgroundColor,
    },
  },
}: $Props) => {
  return (
    <EUIButton
      element="a"
      href={href}
      color={backgroundColor || "primary"}
      onClick={(e) => e.preventDefault()}
      style={{
        paddingTop: paddingTop ? `${paddingTop}px` : "0",
        paddingRight: paddingRight ? `${paddingRight}px` : "0",
        paddingBottom: paddingBottom ? `${paddingBottom}px` : "0",
        paddingLeft: paddingLeft ? `${paddingLeft}px` : "0",
        margin: "0 auto",
      }}
      innerClassName={classes.innerClasses}
    >
      {children}
    </EUIButton>
  );
};

const styles = (theme) => ({
  innerClasses: {
    fontSize: (props) => props.fontSize,
    color: (props) => props.color,
  },
});

export default withStyles(styles)(ButtonPreview);
