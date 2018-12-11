import assign from "lodash/assign";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

export default function applyDefaults(defaults, attrs) {
  return assign({}, defaults, omitBy(attrs || {}, isNil));
}
