import React from "react";

const TextIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M30.33,36.47l-1.8-5.91H19.47l-1.8,5.91H12l8.76-24.94H27.2L36,36.47ZM27.27,26.14c-1.67-5.36-2.6-8.39-2.81-9.09S24.1,15.8,24,15.39q-.57,2.17-3.21,10.75Z" />
  </svg>
);

TextIcon.displayName = "TextIcon";

TextIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default TextIcon;
