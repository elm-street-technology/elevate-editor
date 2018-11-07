// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import Preview from "./Preview";

export default {
  Render,
  Form,
  Preview,
  type: "HorizontalRule",
  description:
    "Horizontal Rule component to create a clear separation of content.",
  image: "http://picsum.photos/600/300",
  defaultAttrs: (attrs: Object = {}) =>
    assign(
      {},
      {
        color: "#000000",
        thickness: 1,
      },
      attrs
    ),
};
