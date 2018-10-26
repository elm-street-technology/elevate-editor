// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $Component } from "../../types";

type Props = $Component & {
  classes: Object,
  src: string,
  height: string,
  alt: string,
  width: string,
  title: string,
  url: string,
};

const Image = ({ src, height, alt, width, title, classes, url }: Props) => {
  if (url) {
    return (
      <div className={classes.root}>
        <a href={url} title={title} onClick={(e) => e.preventDefault()}>
          <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            title={title}
            className={classes.image}
          />
        </a>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        title={title}
        className={classes.image}
      />
    </div>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  image: {
    display: "inline-block",
    margin: "0 auto",
    maxWidth: "100%",
  },
});

export default withStyles(styles, { name: "Image" })(Image);
