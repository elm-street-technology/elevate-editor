// @flow
import React from "react";
import EUIButton from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import type { $Component } from "../../types";

const Button = ({ color, href, children, alignment, classes }: $Component) => (
  <div
    className={classes.root}
    style={alignment ? { textAlign: alignment } : null}
  >
    <EUIButton
      element="a"
      href={href}
      color={color || "primary"}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </EUIButton>
  </div>
);

const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

export default withStyles(styles, { name: "Button" })(Button);
