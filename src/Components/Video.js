// @flow

import React from "react";

import type { $Component } from "../../types";

const Video = ({
  attrs: { autoplay, mp4, ogg, webm, width, height },
}: $Component) => (
  <video autoPlay={autoplay} width={width} height={height}>
    {mp4 ? <source src={mp4} type="video/mp4" /> : null}
    {ogg ? <source src={ogg} type="video/ogg" /> : null}
    {webm ? <source src={webm} type="video/webm" /> : null}
    <div>Your browser does not support the video tag.</div>
  </video>
);

export default Video;
