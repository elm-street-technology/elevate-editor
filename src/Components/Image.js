// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $Component } from "../../types";

const Image = ({
  src,
  height,
  alt,
  width,
  title,
  alignment,
  classes,
}: $Component) => (
  <div
    className={classes.root}
    style={alignment ? { textAlign: alignment } : null}
  >
    <img src={src} width={width} height={height} alt={alt} title={title} />
  </div>
);

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  image: {
    display: "block",
    margin: "0 auto",
  },
});

export default withStyles(styles, { name: "Image" })(Image);
