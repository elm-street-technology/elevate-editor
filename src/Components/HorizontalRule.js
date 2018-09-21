// @flow
import React from "react";
import Hr from "elevate-ui/Hr";

import type { $Component } from "../../types";

const HorizontalRule = ({ color, thickness }: $Component) => (
  <Hr color={color || "primary"} thickness={thickness || 2} />
);

export default HorizontalRule;
