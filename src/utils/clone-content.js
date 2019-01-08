// @flow
import reduce from "lodash/reduce";
import omit from "lodash/omit";

import generateUUID from "./generate-uuid";

import type { $ContentBlocks } from "../../types";

function cleanAttrs(attrs: Object = {}): Object {
  return omit(attrs, ["disableDelete"]);
}

export default function cloneContent(content: $ContentBlocks): $ContentBlocks {
  return reduce(
    content,
    (newContents, item) => {
      newContents.push({
        id: generateUUID(),
        type: item.type,
        attrs: cleanAttrs(item.attrs),
        content:
          item.content && item.content.length > 0
            ? cloneContent(item.content)
            : [],
      });
      return newContents;
    },
    []
  );
}
