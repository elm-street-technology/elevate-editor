// @flow

import _ from "lodash";
import flattenObject from "./flatten-object";

type $Config = {
  start: string,
  end: string,
  separator: string,
  prefix: string | null,
};

const baseConfig: $Config = {
  start: "[",
  end: "]",
  separator: ".",
  prefix: null,
};

export default function stringReplace(
  content: string,
  replacements: Object,
  config?: $Shape<$Config>
): string {
  const settings = _.assign({}, baseConfig, config);
  return _.reduce(
    flattenObject(replacements || {}, settings.separator),
    (result, value, key: string | number) => {
      if (_.isObject(value) && !_.isArray(value)) {
        return stringReplace(
          result,
          value,
          _.assign({}, settings, { prefix: key })
        );
      }
      const baseKey = settings.prefix
        ? [settings.prefix, key].join(settings.separator)
        : key;
      const replaceKey = `${settings.start}${baseKey}${settings.end}`.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      const replaceRegexKey = new RegExp(replaceKey, "gm");

      return result.replace(replaceRegexKey, value);
    },
    content
  );
}
