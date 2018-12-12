// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  internals: $Internals,
  classes: Object,
};

const ImagePreview = ({
  classes,
  content: {
    attrs: { src, height, alt, calculatedWidth, calculatedHeight, title, url },
  },
  internals: { isEditor },
}: $Props) => {
  const img = (
    <div className={classes.imageWrapper}>
      <img
        className={classes.root}
        src={src}
        width={`${calculatedWidth}px`}
        height={`${calculatedHeight}px`}
        alt={alt}
        title={title}
      />
    </div>
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
  imageWrapper: {
    display: "inline-block",
    verticalAlign: "bottom",
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      height: "auto !important",
      display: "block !important",
    },
  },
  root: {
    maxWidth: "100%",
    width: ({ content: { attrs } }) => attrs && `${attrs.calculatedWidth}px`,
    height: ({ content: { attrs } }) => attrs && `${attrs.calculatedHeight}px`,
    display: "block",
    "@media only screen and (max-width: 675px)": {
      width: "100% !important",
      height: "auto !important",
      display: "block !important",
    },
  },
}))(ImagePreview);
