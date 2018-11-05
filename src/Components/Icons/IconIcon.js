import React from "react";

const IconIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M25.42,16.92H22.58v5.66H16.92v2.84h5.66v5.66h2.84V25.42h5.66V22.58H25.42ZM24,9.83A14.17,14.17,0,1,0,38.17,24,14.18,14.18,0,0,0,24,9.83Zm0,25.5A11.33,11.33,0,1,1,35.33,24,11.34,11.34,0,0,1,24,35.33Z" />
  </svg>
);

IconIcon.displayName = "IconIcon";

IconIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default IconIcon;
