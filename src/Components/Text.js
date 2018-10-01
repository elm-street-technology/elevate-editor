// @flow
import React from "react";

import type { $Component } from "../../types";

const Text = ({ value, alignment }: $Component) => (
  <div style={alignment ? { textAlign: alignment } : null}>{value}</div>
);

export default Text;
