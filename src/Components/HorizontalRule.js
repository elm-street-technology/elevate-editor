// @flow
import React from "react";

import type { $Component } from "../../types";

const HorizontalRule = ({ color }: $Component) => (
  <hr style={{ color: color || "black" }} />
);

export default HorizontalRule;
