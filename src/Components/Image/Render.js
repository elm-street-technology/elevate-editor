// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock } from "types";
type $Props = {
  component: $ContentBlock,
} & {
  classes: Object,
};

const ImagePreview = ({
  classes,
  component: {
    attrs: { src, height, alt, width, title, url },
  },
}: $Props) => {
  const img = (
    <img
      className={classes.root}
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={title}
      // className={classes.image}
    />
  );
  if (!url) {
    return img;
  }
  return (
    <a href={url} title={title} onClick={(e) => e.preventDefault()}>
      {img}
    </a>
  );
};

export default withStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
}))(ImagePreview);
