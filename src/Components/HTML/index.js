// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

export default {
  Render,
  Form,
  type: "HTML",
  description:
    "The HTML component allows you to add custom HTML to the page layout.",

  defaultAttrs: (attrs: Object = {}) =>
    Tools.applyDefaults(
      {
        tag: "div",
        children: "",
      },
      attrs
    ),
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "HTML",
        attrs: {
          color: null,
        },
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
