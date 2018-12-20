// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../../";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      children: "Button Text",
      fontSize: 14,
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundColor: "#F15953",
      color: "#ffffff",
      paddingTop: 13,
      paddingRight: 13,
      paddingBottom: 16,
      paddingLeft: 16,
      borderSize: 0,
      borderColor: "",
      url: "",
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Button",
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
