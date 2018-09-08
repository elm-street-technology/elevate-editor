// @flow
import React from "react";

const HorizontalRule = ({ attrs }) => (
  <hr style={{ color: attrs.color || "#000" }} />
);

export default HorizontalRule;
