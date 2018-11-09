// @flow
import React from "react";
import EUIButton from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  classes: Object,
  internals: $Internals,
};

const ButtonRender = ({
  classes,
  content: {
    attrs,
    attrs: {
      color,
      url,
      children,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      fontSize,
      backgroundColor,
    },
  },
  internals: { isEditor },
}: $Props) => {
  return (
    <EUIButton
      element="a"
      href={url}
      color={backgroundColor || "primary"}
      onClick={(e) => {
        if (isEditor) {
          e.preventDefault();
        }
      }}
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

export default withStyles(styles)(ButtonRender);
