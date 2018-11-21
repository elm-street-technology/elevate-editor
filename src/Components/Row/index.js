// @flow
import assign from "lodash/assign";

import generateUUID from "../../utils/generate-uuid";
import Render from "./Render";
import Form from "./Form";

const defaultAttrs = (attrs: Object = {}) => {
  return assign(
    {},
    {
      width: "100%",
      height: "inherit",
      borderSize: 0,
      borderColor: "#000000",
      backgroundColor: "#ffffff",
      backgroundImage: "",
      backgroundSize: "",
      upload: "",
      direction: "vertical",
      alignment: "left",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      allowChildren: true,
    },
    attrs
  );
};

export default {
  Render,
  Form,
  type: "Row",
  description:
    "The row component allows you to group multiple components together. It can be used for vertically stacking components or positioning multiple components next to each other.",

  defaultAttrs,
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Row",
      content: [
        {
          id: generateUUID(),
          type: "Row",
          content: [
            {
              id: generateUUID(),
              type: "Image",
              content: [],
              attrs: {},
            },
          ],
          attrs: defaultAttrs(),
        },
        {
          id: generateUUID(),
          type: "Row",
          content: [
            {
              id: generateUUID(),
              type: "Text",
              content: [],
              attrs: { children: "Your text" },
            },
          ],
          attrs: defaultAttrs(),
        },
      ],
      attrs: defaultAttrs({ direction: "horizontal" }),
    },
  ],
};
