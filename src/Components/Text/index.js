// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

export default {
  Render,
  Form,
  type: "Text",
  description:
    "The Text component allows you to add custom text to the page layout.",

  defaultAttrs: (attrs: Object = {}) =>
    assign(
      {},
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
      },
      attrs
    ),
  generateContent() {
    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: {},
        content: [
          {
            id: Tools.generateUUID(),
            type: "Text",
            attrs: {},
            content: [],
          },
        ],
      },
    ];
  },
};
