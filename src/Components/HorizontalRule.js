// @flow
import React from "react";
import Hr from "elevate-ui/Hr";

import type { $Component } from "../../types";

type Props = {
  color: string,
  thickness: string | number,
};

const HorizontalRule = ({ color, thickness }: $Component & Props) => (
  <Hr
    color={color || "primary"}
    thickness={parseInt(thickness) || 2}
    style={{ margin: "0 auto" }}
  />
);

export default HorizontalRule;
