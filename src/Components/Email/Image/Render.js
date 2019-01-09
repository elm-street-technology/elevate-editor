// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  internals: $Internals,
  classes: Object,
};

function isPreview(src) {
  return !/^(?:http(s)?:\/\/)/.test(src);
}

// used only for placeholder calculations
function handleImageDimension(value) {
  if (/^\d+$/.test(value)) {
    value = `${value}px`;
  }
  if (/%$/.test(value)) {
    return "100%";
  }
  return value;
}

// used only for placeholder calculations
function placeholderDimension(src, value, calculatedValue) {
  if (isPreview(src)) {
    if (!value || value === "" || /%$/.test(value)) {
      return "";
    }
    return handleImageDimension(value);
  }
  return `${calculatedValue}px`;
}

const ImagePreview = ({
  classes,
  content: {
    attrs: {
      src,
      width,
      height,
      alt,
      calculatedWidth,
      calculatedHeight,
      title,
      url,
    },
  },
  internals: { isEditor },
}: $Props) => {
  const img = (
    <div className={classes.imageWrapper}>
      <img
        className={classes.root}
        src={src}
        width={placeholderDimension(src, width, calculatedWidth)}
        height={placeholderDimension(src, height, calculatedHeight)}
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
      height: "auto !important",
    },
  },
  root: {
    maxWidth: "100%",
    width: ({ content: { attrs } }) =>
      attrs &&
      placeholderDimension(attrs.src, attrs.width, attrs.calculatedWidth),
    height: ({ content: { attrs } }) =>
      attrs &&
      placeholderDimension(attrs.src, attrs.height, attrs.calculatedHeight),
    display: "block",
    "@media only screen and (max-width: 675px)": {
      height: "auto !important",
    },
  },
}))(ImagePreview);
