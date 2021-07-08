// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      src: "https://elevate-ui.com",
      width: "100%",
      height: "50vh",
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "Iframe",
  label: "iFrame",
  description:
    "iFrame component to embed HTML document inside another HTML document.",

  // validation: Yup.object()
  defaultAttrs,
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "Iframe",
        attrs: defaultAttrs(),
        content: [],
      },
    ];

    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: { allowChildren: false },
        content,
      },
    ];
  },
};
