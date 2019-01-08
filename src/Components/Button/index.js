// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      children: "Button Text",
      fontSize: "14px",
      backgroundColor: "primary",
      color: "#000000",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      url: "",
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Button",
  label: "Button",
  description: "Button component that can be used as a call to action.",

  // validation: Yup.object()
  defaultAttrs,
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "Button",
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
