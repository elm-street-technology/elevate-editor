// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  classes: Object,
  internals: $Internals,
};

const IframeRender = ({
  classes,
  content: {
    attrs,
    attrs: { src },
  },
  internals: { isEditor },
}: $Props) => {
  return <iframe src={src} title="iFrame" className={classes.innerClasses} />;
};

const styles = (theme) => ({
  innerClasses: {
    width: ({ content: { attrs } }) => attrs && attrs.width,
    height: ({ content: { attrs } }) => attrs && attrs.height,
  },
});

export default withStyles(styles)(IframeRender);
