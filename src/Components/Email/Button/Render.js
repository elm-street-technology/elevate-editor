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
    attrs: { url },
  },
  internals: { isEditor },
}: $Props) => {
  return (
    <div className={classes.buttonWrapper}>
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        className={classes.buttonTable}
      >
        <tbody>
          <tr>
            <td className={classes.buttonTd} align="center" valign="middle">
              <a
                href={url}
                onClick={(e) => isEditor && e.preventDefault()}
                target="_blank"
                className={classes.button}
              >
                {attrs.children}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = (theme) => ({
  buttonWrapper: {
    display: "inline-block",
    verticalAlign: "bottom",
  },
  buttonTable: {
    borderCollapse: "separate !important",
  },
  buttonTd: {
    lineHeight: "100%",
    color: ({ content: { attrs } }) => attrs && attrs.color,
    fontFamily: ({ content: { attrs } }) => attrs && attrs.fontFamily,
    fontWeight: "bold",
    fontSize: ({ content: { attrs } }) => attrs && `${attrs.fontSize || 10}px`,
    letterSpacing: "-.5px",
    backgroundColor: ({ content: { attrs } }) => attrs && attrs.backgroundColor,
    border: ({ content: { attrs } }) =>
      attrs.borderSize > 0
        ? `${attrs.borderSize}px solid ${attrs.borderColor}`
        : null,
    borderRadius: "5px",
  },
  button: {
    display: "block !important",
    borderRadius: "5px",
    borderStyle: "solid",
    borderColor: ({ content: { attrs } }) => attrs && attrs.backgroundColor,
    borderTopWidth: ({ content: { attrs } }) =>
      attrs.paddingTop ? `${attrs.paddingTop}px` : "0",
    borderRightWidth: ({ content: { attrs } }) =>
      attrs.paddingRight ? `${attrs.paddingRight}px` : "0",
    borderBottomWidth: ({ content: { attrs } }) =>
      attrs.paddingBottom ? `${attrs.paddingBottom}px` : "0",
    borderLeftWidth: ({ content: { attrs } }) =>
      attrs.paddingLeft ? `${attrs.paddingLeft}px` : "0",
    color: ({ content: { attrs } }) => attrs && attrs.color,
    textDecoration: "none",
    fontFamily: ({ content: { attrs } }) => attrs && attrs.fontFamily,
    fontSize: ({ content: { attrs } }) => attrs && `${attrs.fontSize || 10}px`,
  },
});

export default withStyles(styles)(ButtonRender);
