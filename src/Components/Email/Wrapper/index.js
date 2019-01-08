// @flow
import generateUUID from "../../../utils/generate-uuid";
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../../../";

const defaultAttrs = (attrs: Object = {}) => {
  return Tools.applyDefaults(
    {
      width: "675",
      borderSize: 1,
      borderColor: "#a9aaab",
      innerBackgroundColor: "#ffffff",
      paddingTop: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      backgroundColor: "#E4E4E4",
      allowChildren: true,
      disableDelete: true,
      footer: null,
    },
    attrs
  );
};

export default {
  toolbarDisabled: true,
  Render,
  Form,
  type: "Wrapper",
  description:
    "The email wrapper component allows you to safely wrap content in standard email sizes.",
  defaultAttrs,
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Wrapper",
      content: [],
      attrs: defaultAttrs(),
    },
  ],
};
