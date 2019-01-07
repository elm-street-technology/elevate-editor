// @flow
import Render from "../../Components/Image/Render";
import Form from "./Form";
import Context from "./Context";

import { Tools } from "../../index.js";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      src: "https://picsum.photos/125/125/?random",
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
  Context,
  type: "Gallery",
  description: "Select an image from the available images",
  defaultAttrs,
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "Gallery",
        attrs: defaultAttrs(),
        content: [],
      },
    ];

    return parent && !parent.content.length
      ? content
      : [
          {
            id: Tools.generateUUID(),
            type: "Row",
            attrs: {},
            content,
          },
        ];
  },
};
