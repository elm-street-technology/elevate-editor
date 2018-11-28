// @flow

import times from "lodash/times";
import generateUUID from "../../utils/generate-uuid";
import Row from "../Row";

export default {
  type: "TwoCol",
  description: "Two columns in a single row",
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Row",
      content: times(2, () => ({
        id: generateUUID(),
        type: "Row",
        content: [],
        attrs: Row.defaultAttrs(),
      })),
      attrs: Row.defaultAttrs({ direction: "horizontal" }),
    },
  ],
};
