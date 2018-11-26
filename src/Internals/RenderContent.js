// @flow

import React, { Fragment } from "react";
// import reduce from "lodash/reduce";
import find from "lodash/find";
import assign from "lodash/assign";

import RenderElement from "./RenderElement";

import type { $ContentBlock, $ContentBlocks, $Internals } from "types";

type $Props = { content: $ContentBlocks, internals: $Internals };

// function hasActiveDirectChild(
//   content: $ContentBlocks,
//   activeComponentId?: null | string
// ): boolean {
//   return reduce(
//     content,
//     (memo, child) => {
//       return child && child.id === activeComponentId ? true : memo;
//     },
//     false
//   );
// }

function renderChild(origChild: $ContentBlock, idx: number, props: $Props) {
  const internals = props.internals || {};
  const components = internals.components;
  const editingContentId = internals.editingContentId;

  let child: $ContentBlock = { ...origChild };
  const isActive = editingContentId === child.id;
  // const childActive = isActive
  //   ? false
  //   : hasActiveDirectChild(child.content, editingContentId);

  if (isActive && props.internals.editingContentFormAttrs) {
    child.attrs = props.internals.editingContentFormAttrs;
  }

  const Component = find(components, { type: child.type });
  if (!(Component && Component.Render)) {
    throw new Error(`Render function is undefined for ${child.type}`);
  }

  const element = React.createElement(
    Component.Render,
    assign({}, props, { content: child, onClick: () => console.log("wtf") })
  );

  return !props.internals.isEditor ? (
    <Fragment key={idx}>{element}</Fragment>
  ) : (
    <RenderElement
      key={idx}
      child={child}
      internals={internals}
      isActive={isActive}
    >
      {element}
    </RenderElement>
  );
}

const RenderContent = (props: $Props) => {
  return props.content.map((child, idx) => renderChild(child, idx, props));
};
export default RenderContent;
