// @flow
import React from "react";

import type { $Component } from "../../types";

const Text = ({ attrs }: $Component) => <div>{attrs.value}</div>;

export default Text;
