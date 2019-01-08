// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

export default {
  Render,
  Form,
  type: "Text",
  label: "Rich Text",
  description:
    "The Text component allows you to add custom text to the page layout.",

  defaultAttrs: (attrs: Object = {}) =>
    Tools.applyDefaults(
      {
        value: {
          blocks: [
            {
              key: "2rols",
              text: "Your text",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        color: "",
      },
      attrs
    ),
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "Text",
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
