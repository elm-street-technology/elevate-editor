// @flow

import React from "react";

import EUIcon from "elevate-ui/Icon/Icon";

import type { $Component } from "../../types";

const Icon = ({ attrs }: $Component) => (
  <EUIcon {...attrs}>{attrs.label}</EUIcon>
);

export default Icon;
