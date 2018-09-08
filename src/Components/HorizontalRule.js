// @flow
import React from "react";

import type { $Component } from "../../types";

const HorizontalRule = ({ attrs }: $Component) => (
  <hr style={{ color: attrs.color || "#000" }} />
);

export default HorizontalRule;
