// @flow

import React from "react";

import type { $Component } from "../../types";

const Button = ({ attrs }: $Component) => <button>{attrs.label}</button>;

export default Button;
