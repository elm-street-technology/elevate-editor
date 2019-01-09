// @flow

import times from "lodash/times";
import generateUUID from "../../utils/generate-uuid";
import Row from "../Row";

export default {
  type: "ThreeCol",
  label: "Three Column Row",
  description: "Three columns in a single row",
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Row",
      content: times(3, () => ({
        id: generateUUID(),
        type: "Row",
        content: [],
        attrs: Row.defaultAttrs({ width: `${100 / 3}%`, allowChildren: true }),
      })),
      attrs: Row.defaultAttrs({
        direction: "horizontal",
        allowChildren: false,
      }),
    },
  ],
};
