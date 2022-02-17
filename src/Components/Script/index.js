// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      url: "",
      width: "33%",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Embed",
  label: "Embed",
  description: "Embed custom third party widgets, scripts and content.",

  // validation: Yup.object()
  defaultAttrs,
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "Embed",
        attrs: defaultAttrs(),
        content: [],
      },
    ];

    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: {
          width: "100%",
          paddingTop: 4,
          paddingRight: 4,
          paddingBottom: 4,
          paddingLeft: 4,
          allowChildren: false,
        },
        content,
      },
    ];
  },
};
