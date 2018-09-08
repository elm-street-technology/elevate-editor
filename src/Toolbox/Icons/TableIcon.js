import React from "react";

const TableIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M20.67,21.36h6.66V36H20.67ZM30,36h4a2.68,2.68,0,0,0,2.67-2.67v-12H30Zm4-24H14a2.68,2.68,0,0,0-2.67,2.67v4H36.67v-4A2.68,2.68,0,0,0,34,12ZM11.33,33.33A2.68,2.68,0,0,0,14,36h4V21.33H11.33Z" />
  </svg>
);

TableIcon.displayName = "TableIcon";

TableIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default TableIcon;
