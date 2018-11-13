// @flow
import assign from "lodash/assign";

import generateUUID from "../../utils/generate-uuid";
import Render from "./Render";
import Form from "./Form";
import Preview from "./Preview";

export default {
  Render,
  Form,
  Preview,
  type: "Row",
  description:
    "The row component allows you to group multiple components together.",
  image: "http://picsum.photos/600/300",
  defaultAttrs: (attrs: Object = {}) => {
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
  },

  defaultContent: () => [
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
      attrs: {},
    },
    {
      id: generateUUID(),
      type: "Row",
      content: [
        {
          id: generateUUID(),
          type: "Text",
          content: [],
          attrs: {},
        },
      ],
      attrs: {},
    },
  ],
};
