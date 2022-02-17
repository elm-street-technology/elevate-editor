// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      url: "",
      width: "33%",
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Embed",
  label: "Embed",
  description: "Embed custom 3rd party scripts and content.",

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
        attrs: { height: "100%", allowChildren: false },
        content,
      },
    ];
  },
};
