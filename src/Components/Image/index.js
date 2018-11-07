// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import Preview from "./Preview";

export default {
  Render,
  Form,
  Preview,
  type: "Image",
  description:
    "Image component to display images or graphics in the page layout.",
  image: "http://picsum.photos/600/300",
  defaultAttrs: (attrs: Object = {}) =>
    assign(
      {},
      {
        src: "https://picsum.photos/50/50/?random",
        upload: "",
        width: "",
        height: "",
        title: "",
        alt: "",
        url: "",
      },
      attrs
    ),
};
