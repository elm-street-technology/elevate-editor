// @flow
import React from "react";
import EUIButton from "elevate-ui/Button";
import withStyles from "elevate-ui/withStyles";
import type { $Component } from "../../types";
import classNames from "classnames";

type Props = {
  classes: Object,
  color: string,
  href: string,
  children: any,
  alignment: string,
  buttonPaddingTop?: string,
  buttonPaddingRight?: string,
  buttonPaddingBottom?: string,
  buttonPaddingLeft?: string,
  fontSize?: number,
  buttonColor?: string,
  textColor?: string,
};

const Button = ({
  classes,
  color,
  href,
  children,
  alignment,
  buttonPaddingTop,
  buttonPaddingRight,
  buttonPaddingBottom,
  buttonPaddingLeft,
  fontSize,
  buttonColor,
  textColor,
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
      style={{
        paddingTop: buttonPaddingTop ? `${buttonPaddingTop}px` : "0",
        paddingRight: buttonPaddingRight ? `${buttonPaddingRight}px` : "0",
        paddingBottom: buttonPaddingBottom ? `${buttonPaddingBottom}px` : "0",
        paddingLeft: buttonPaddingLeft ? `${buttonPaddingLeft}px` : "0",
      }}
      innerClassName={classNames(
        fontSize && classes.fontSize,
        textColor && classes.textColor
      )}
    >
      {children}
    </EUIButton>
  </div>
);

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  fontSize: {
    fontSize: (props) => props.fontSize,
  },
  textColor: {
    color: (props) => props.textColor,
  },
});

export default withStyles(styles, { name: "Button" })(Button);
