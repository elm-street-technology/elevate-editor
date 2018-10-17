// @flow
import React from "react";
import EUIButton from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import type { $Component } from "../../types";

type Props = {
  classes: Object,
  color: string,
  href: string,
  children: any,
  alignment: string,
};

const Button = ({
  classes,
  color,
  href,
  children,
  alignment,
}: $Component & Props) => (
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
