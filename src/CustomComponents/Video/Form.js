// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import ButtonGroup from "elevate-ui/ButtonGroup";

const VideoForm = () => (
  <Fragment>
    <FastField
      id="mp4"
      name="mp4"
      label="MP4 Url"
      placeholder="https://www.domain.com/your-video.mp4"
      component={Input}
      type="text"
    />
    <FastField
      id="ogg"
      name="ogg"
      label="OGG Url"
      placeholder="https://www.domain.com/your-video.ogg"
      component={Input}
      type="text"
    />
    <FastField
      id="webm"
      name="webm"
      label="WebM Url"
      placeholder="https://www.domain.com/your-video.webm"
      component={Input}
      type="text"
    />
    <FastField
      id="width"
      name="width"
      label="Width"
      component={Input}
      type="text"
    />
    <FastField
      id="height"
      name="height"
      label="Height"
      component={Input}
      type="text"
    />
    <FastField
      id="autoplay"
      name="autoplay"
      label="Autoplay"
      component={ButtonGroup}
      items={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
      color="secondary"
    />
    <FastField
      id="controls"
      name="controls"
      label="Controls"
      component={ButtonGroup}
      items={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
      color="secondary"
    />
  </Fragment>
);

export default VideoForm;
