// @flow
import React from "react";

import type { $Component } from "../../types";

const Image = ({ attrs }: $Component) => (
  <img
    src={`https://placehold.it/${attrs.width}x${attrs.height}`}
    alt={attrs.alt}
    title={attrs.title}
  />
);

export default Image;
