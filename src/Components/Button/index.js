// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import Preview from "./Preview";

export default {
  Render,
  Form,
  Preview,
  type: "Button",
  description: "Button component that can be used as a call to action.",
  image: "http://picsum.photos/600/300",
  // validation: Yup.object()
  defaultAttrs: (attrs: Object = {}) =>
    assign(
      {},
      {
        children: "Button Text",
        fontSize: "14px",
        backgroundColor: "#ff0000",
        color: "#000000",
        paddingTop: 4,
        paddingRight: 4,
        paddingBottom: 4,
        paddingLeft: 4,
      },
      attrs
    ),
};
