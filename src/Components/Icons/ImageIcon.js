import React from "react";

const ImageIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M33,15H15a2.15,2.15,0,0,0-2,2V31a2,2,0,0,0,2,2H33a2.15,2.15,0,0,0,2-2V17A2.15,2.15,0,0,0,33,15ZM17,29l3.5-4.5,2.5,3L26.5,23,31,29Z" />
  </svg>
);

ImageIcon.displayName = "ImageIcon";

ImageIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default ImageIcon;
