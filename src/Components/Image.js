// @flow
import React from "react";

const Image = ({ attrs }) => (
  <img
    src={`https://placehold.it/${attrs.width}x${attrs.height}`}
    alt={attrs.alt}
    title={attrs.title}
  />
);

export default Image;
