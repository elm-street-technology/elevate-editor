// @flow
import assign from "lodash/assign";

import Render from "./Render";
import Form from "./Form";
import Preview from "./Preview";

export default {
  Render,
  Form,
  Preview,
  type: "Text",
  description:
    "The Text component allows you to add custom text to the page layout.",
  image: "http://picsum.photos/600/300",
  defaultAttrs: (attrs: Object = {}) =>
    assign(
      {},
      {
        value: {
          blocks: [
            {
              key: "2rols",
              text: "This is a text block. Click here to edit.",
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
};
