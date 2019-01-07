// @flow

import { Tools } from "../../index.js";

import Render from "./Render";
import Form from "./Form";

// This should always take an object and default to empty object, and it should always return an object
const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      autoplay: "No",
      controls: "Yes",
      ogg: "",
      mp4:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      webm: "",
      height: "400",
      width: "400",
    },
    attrs
  );

export default {
  type: "Video",
  description: "Show a video on screen",
  defaultAttrs, // this will get called whenever a video component is being loaded into the Editor
  generateContent() {
    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: {
          paddingTop: 4,
          paddingRight: 4,
          paddingBottom: 4,
          paddingLeft: 4,
        },
        content: [
          {
            id: Tools.generateUUID(),
            type: "Video",
            content: [],
          },
        ],
      },
    ];
  },
  Render,
  Form,
};
