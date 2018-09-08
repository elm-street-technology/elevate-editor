// @flow

import React from "react";

import EUIButton from "elevate-ui/Button";

import type { $Component } from "../../types";

const Button = ({ attrs }: $Component) => <EUIButton>{attrs.label}</EUIButton>;

export default Button;
