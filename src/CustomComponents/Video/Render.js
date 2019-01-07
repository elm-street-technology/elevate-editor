// @flow
import React from "react";

const Video = ({
  content: {
    attrs: { controls, autoplay, mp4, ogg, webm, width, height },
  },
}: Object) => (
  <video
    autoPlay={autoplay === "Yes" ? true : false}
    controls={controls === "Yes" ? true : false}
    width={width}
    height={height}
  >
    {mp4 ? <source src={mp4} type="video/mp4" /> : null}
    {ogg ? <source src={ogg} type="video/ogg" /> : null}
    {webm ? <source src={webm} type="video/webm" /> : null}
    <div>Your browser does not support the video tag.</div>
  </video>
);

export default Video;
