import React from "react";

const HorizontalRuleIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <rect x="6" y="23" width="36" height="2" />
  </svg>
);

HorizontalRuleIcon.displayName = "HorizontalRuleIcon";

HorizontalRuleIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default HorizontalRuleIcon;
