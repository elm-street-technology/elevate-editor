// @flow

import times from "lodash/times";
import generateUUID from "../../utils/generate-uuid";
import Row from "../Row";

export default {
  type: "FourCol",
  description: "Four columns in a single row",
  generateContent: () => [
    {
      id: generateUUID(),
      type: "Row",
      content: times(4, () => ({
        id: generateUUID(),
        type: "Row",
        content: [],
        attrs: Row.defaultAttrs(),
      })),
      attrs: Row.defaultAttrs({ direction: "horizontal" }),
    },
  ],
};
