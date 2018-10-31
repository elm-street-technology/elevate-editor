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
