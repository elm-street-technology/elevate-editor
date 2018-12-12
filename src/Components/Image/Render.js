// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  internals: $Internals,
  classes: Object,
  refCallback: () => void,
  reCalculate: () => void,
};
const ImagePreview = ({
  classes,
  content: {
    attrs: { src, height, alt, width, title, url },
  },
  internals: { isEditor },
  refCallback,
  reCalculate,
}: $Props) => {
  const img = (
    <img
      className={classes.root}
      src={src}
      width={width}
      height={height}
      alt={alt}
      title={title}
      ref={refCallback}
      onLoad={reCalculate}
    />
  );
  if (!url) {
    return img;
  }
  return (
    <a
      href={url}
      title={title}
      onClick={(e) => {
        if (isEditor) {
          e.preventDefault();
        }
      }}
    >
      {img}
    </a>
  );
};

export default withStyles((theme) => ({
  root: {
    maxWidth: "100%",
    display: "block",
  },
}))(ImagePreview);
