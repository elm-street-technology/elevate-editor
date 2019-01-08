// @flow
import Render from "./Render";
import Form from "./Form";
import { Tools } from "../..";

const defaultAttrs = (attrs: Object = {}) =>
  Tools.applyDefaults(
    {
      color: "#000000",
      thickness: 1,
    },
    attrs
  );

export default {
  Render,
  Form,
  type: "HorizontalRule",
  label: "Separator",
  description:
    "Horizontal Rule component to create a clear separation of content.",
  defaultAttrs,
  generateContent({ parent }: Object = {}) {
    const content = [
      {
        id: Tools.generateUUID(),
        type: "HorizontalRule",
        attrs: defaultAttrs(),
        content: [],
      },
    ];

    return parent && !parent.content.length
      ? content
      : [
          {
            id: Tools.generateUUID(),
            type: "Row",
            attrs: {
              width: "100%",
              paddingTop: 4,
              paddingRight: 4,
              paddingBottom: 4,
              paddingLeft: 4,
            },
            content,
          },
        ];
  },
};
