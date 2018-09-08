// @flow
import React from "react";

import type { $Component } from "../../types";

const Image = ({ height, alt, width, title }: $Component) => (
  <img
    src={`https://placehold.it/${width}x${height}`}
    alt={alt}
    title={title}
  />
);

export default Image;
