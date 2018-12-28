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

// used to convert numeric value to px value
// used by the image & wrapper
function convertDimensions(value) {
  if (/^\d+$/.test(value)) {
    return `${value}px`;
  }
  return value;
}

// used only by the image to convert the width/height value for the image
function handleImageDimension(value) {
  value = convertDimensions(value);
  if (/%$/.test(value)) {
    // make the image fill the wrapping element that contains the % width
    return "100%";
  }
  return value;
}

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
    <div className={classes.imageWrapper}>
      <img
        className={classes.root}
        src={src}
        alt={alt}
        title={title}
        ref={refCallback}
        onLoad={reCalculate}
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
    width: ({ content: { attrs } }) => convertDimensions(attrs && attrs.width),
    height: ({ content: { attrs } }) =>
      convertDimensions(attrs && attrs.height),
  },
  root: {
    maxWidth: "100%",
    width: ({ content: { attrs } }) =>
      handleImageDimension(attrs && attrs.width),
    height: ({ content: { attrs } }) =>
      handleImageDimension(attrs && attrs.height),
    display: "inline-block",
    verticalAlign: "bottom",
  },
}))(ImagePreview);
