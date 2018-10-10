import React from "react";

const VideoIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size} fill={color}>
    <path d="M22.8,21.3,26.4,24l-3.6,2.7ZM35,17V31a2.15,2.15,0,0,1-2,2H15a2,2,0,0,1-2-2V17a2.15,2.15,0,0,1,2-2H33A2.15,2.15,0,0,1,35,17Zm-5,7a6,6,0,1,0-6,6A6,6,0,0,0,30,24Z" />
  </svg>
);

VideoIcon.displayName = "VideoIcon";

VideoIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

export default VideoIcon;
