// @flow

import times from "lodash/times";
import generateUUID from "../../utils/generate-uuid";
import Row from "../Row";

export default {
  type: "FiveCol",
  description: "Five columns in a single row",
  label: "Five Column Row",
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Row",
      content: times(5, () => ({
        id: generateUUID(),
        type: "Row",
        content: [],
        attrs: Row.defaultAttrs({ width: `${100 / 5}%`, allowChildren: true }),
      })),
      attrs: Row.defaultAttrs({
        direction: "horizontal",
        allowChildren: false,
      }),
    },
  ],
};
