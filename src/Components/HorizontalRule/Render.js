// @flow
import React from "react";
import Hr from "elevate-ui/Hr";

import type { $ContentBlock } from "types";
type $Props = {
  component: $ContentBlock,
};

const HorizontalRulePreview = ({
  component: {
    attrs: { color, thickness },
  },
}: $Props) => (
  <Hr
    color={color || "primary"}
    thickness={parseInt(thickness) || 2}
    style={{ margin: "0 auto" }}
  />
);

export default HorizontalRulePreview;
