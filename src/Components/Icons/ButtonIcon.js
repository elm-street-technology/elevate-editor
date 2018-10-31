import React from "react";

const ButtonIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M41,16H7a2,2,0,0,0-2,1.78V30.22A1.9,1.9,0,0,0,7,32H41a2,2,0,0,0,2-1.78V17.78A2,2,0,0,0,41,16Z" />
  </svg>
);

ButtonIcon.displayName = "ButtonIcon";

ButtonIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default ButtonIcon;
