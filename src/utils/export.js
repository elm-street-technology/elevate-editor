// @flow
import postcss from "postcss";
import postcssJs from "postcss-js";
import juice from "juice";

import { create } from "jss";
import preset from "jss-preset-default";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JssProvider, SheetsRegistry } from "react-jss";
import { Tools } from "../";
import assign from "lodash/assign";
import get from "lodash/get";

import type { $ContentBlocks, $Components, $ExportOptions } from "types";

function removeEmptyRules(value: string): string {
  return value.replace(/^(\.|#)[\w-]+ \{\n\}$/gm, "");
}

async function processContent(
  content: $ContentBlocks = [],
  components: $Components = []
): Promise<{ body: string, css: string }> {
  const jss = create(preset());
  jss.use({
    onChangeValue: (value, prop, rule) => {
      if (typeof value === "string" && value.trim() === "") {
        return "";
      }
      return value;
    },
  });
  const sheets = new SheetsRegistry();

  const body = renderToStaticMarkup(
    createElement(
      JssProvider,
      { registry: sheets, jss },
      Tools.renderReact({
        content: content || [],
        components,
      })
    )
  );

  const cssRoot = postcssJs.objectify(
    postcss.parse(removeEmptyRules(sheets.toString()))
  );
  // extend the body color
  if (get(content, "[0].attrs.backgroundColor")) {
    cssRoot["html, body"] = assign({}, cssRoot["html, body"] || {}, {
      backgroundColor: content[0].attrs.backgroundColor,
    });
  }

  const { css } = await postcss().process(cssRoot, { parser: postcssJs });
  return { body, css };
}

function renderHtml(body: string, css: string): string {
  const html = createElement(
    "html",
    { xmlns: "http://www.w3.org/1999/xhtml" },
    createElement(
      "head",
      null,
      createElement("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      }),
      createElement("style", {
        dangerouslySetInnerHTML: { __html: css },
      })
    ),
    createElement("body", {
      dangerouslySetInnerHTML: { __html: body },
    })
  );
  return "<!doctype html>\n" + renderToStaticMarkup(html);
}

export default async (options: $ExportOptions) => {
  const { inlineCss = false, content, components } = options;
  const { body, css } = await processContent(content, components);
  const html = renderHtml(body, css);
  if (inlineCss) {
    return juice(html);
  }
  return html;
};
