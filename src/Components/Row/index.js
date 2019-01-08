// @flow
import generateUUID from "../../utils/generate-uuid";
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../";

const defaultAttrs = (attrs: Object = {}) => {
  return Tools.applyDefaults(
    {
      width: "100%",
      height: "",
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
  label: "Row", // cannot be called single column row because all multi-column rows become a Row after component selection
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
