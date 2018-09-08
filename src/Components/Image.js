// @flow
import React from "react";

import type { $Component } from "../../types";

const Image = ({ src, height, alt, width, title }: $Component) => (
  <img src={src} width={width} height={height} alt={alt} title={title} />
);

export default Image;
