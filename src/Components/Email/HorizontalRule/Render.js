// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock } from "types";
type $Props = {
  content: $ContentBlock,
  classes: Object,
};

const HorizontalRulePreview = ({
  content: {
    attrs: { color, thickness },
  },
  classes,
}: $Props) => <div className={classes.hr}>&nbsp;</div>;

export default withStyles((theme) => ({
  hr: {
    background: ({ content: { attrs } }) =>
      attrs.color ? attrs.color : "#11181e",
    lineHeight: ({ content: { attrs } }) =>
      parseInt(attrs.thickness)
        ? `${attrs.thickness}px !important`
        : "2px !important",
    fontSize: ({ content: { attrs } }) =>
      parseInt(attrs.thickness)
        ? `${attrs.thickness}px !important`
        : "2px !important",
    height: ({ content: { attrs } }) =>
      parseInt(attrs.thickness) ? `${attrs.thickness}px` : "2px",
    margin: "0 auto",
    minWidth: "25px",
  },
}))(HorizontalRulePreview);
