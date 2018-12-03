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
      backgroundColor: "transparent",
      backgroundImage: "",
      backgroundSize: "",
      upload: "",
      direction: "vertical",
      alignment: "",
      paddingTop: 8,
      paddingRight: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      allowChildren: false,
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
      content: [],
      attrs: defaultAttrs(),
    },
  ],
};
