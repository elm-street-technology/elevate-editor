// @flow

import React, { Fragment } from "react";
import reduce from "lodash/reduce";
import find from "lodash/find";
import assign from "lodash/assign";

import ActionBar from "./ActionBar";

import type { $ContentBlock, $ContentBlocks, $Internals } from "types";

type $Props = { content: $ContentBlocks, internals: $Internals };

function previewComponentStyles({
  isActive,
  childActive,
}: {
  isActive: boolean,
  childActive: boolean,
}): Object {
  return {
    // width: "100%", // this cannot have width: 100% because it doesn't accurately represent the dom, for example row -> direction: horizontal
    height: "100%",
    border: childActive
      ? "1px dotted rgb(181, 181, 181)"
      : "1px dotted rgb(200, 200, 200)",
    boxShadow: isActive ? "1px 1px 1px #ddd" : "", // if a child is being edited, darken parent's border
  };
}

function hasActiveDirectChild(
  content: $ContentBlocks,
  activeComponentId?: null | string
): boolean {
  return reduce(
    content,
    (memo, child) => {
      return child && child.id === activeComponentId ? true : memo;
    },
    false
  );
}

function renderChild(origChild: $ContentBlock, idx: number, props: $Props) {
  const internals = props.internals || {};
  const components = internals.components;
  const editingContentId = internals.editingContentId;

  let child: $ContentBlock = { ...origChild };
  const isActive = editingContentId === child.id;
  const childActive = isActive
    ? false
    : hasActiveDirectChild(child.content, editingContentId);

  if (isActive && props.internals.editingContentFormAttrs) {
    child.attrs = props.internals.editingContentFormAttrs;
  }

  const Component = find(components, { type: child.type });
  if (!(Component && Component.Render)) {
    throw new Error(`Render function is undefined for ${child.type}`);
  }

  const element = React.createElement(
    Component.Render,
    assign({}, props, { content: child })
  );

  return !props.internals.isEditor ? (
    <Fragment key={idx}>{element}</Fragment>
  ) : (
    <div
      style={previewComponentStyles({
        isActive,
        childActive,
      })}
      key={idx}
    >
      {element}
      <ActionBar content={child} internals={internals} />
    </div>
  );
}

const RenderContent = (props: $Props) => {
  return props.content.map((child, idx) => renderChild(child, idx, props));
};
export default RenderContent;
