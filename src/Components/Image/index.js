// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) =>
  assign(
    {},
    {
      src: "https://picsum.photos/125/125/?random",
      upload: "",
      width: "",
      height: "",
      title: "",
      alt: "",
      url: "",
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Image",
  description:
    "Image component to display images or graphics in the page layout.",
  defaultAttrs,
  generateContent() {
    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: {},
        content: [
          {
            id: Tools.generateUUID(),
            type: "Image",
            attrs: defaultAttrs(),
            content: [],
          },
        ],
      },
    ];
  },
};
