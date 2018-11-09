// @flow

import React from "react";
import omit from "lodash/omit";
import reduce from "lodash/reduce";
import find from "lodash/find";
import assign from "lodash/assign";

import type { $ContentBlock, $ContentBlocks, $Internals } from "types";

type $Props = { component: $ContentBlock, internals: $Internals };

function previewComponentStyles({
  isActive,
  childActive,
}: {
  isActive: boolean,
  childActive: boolean,
}): Object {
  return {
    width: "100%",
    height: "100%",
    border: childActive
      ? "1px dotted rgb(181, 181, 181)"
      : "1px dotted rgb(200, 200, 200)",
    boxShadow: isActive ? "1px 1px 1px #ddd" : "", // if a child is being edited, darken parent's border
  };
}

function hasActiveDirectChild(
  components: $ContentBlocks,
  activeComponentId?: null | string
): boolean {
  return reduce(
    components,
    (memo, component) => {
      return component && component.id === activeComponentId ? true : memo;
    },
    false
  );
}

const RenderComponent = (props: $Props) => {
  const components = props.internals.components;
  let component: $ContentBlock = { ...props.component };
  const isActive = props.internals.editingContentId === component.id;
  const childActive = isActive
    ? false
    : hasActiveDirectChild(component.content, props.internals.editingContentId);

  switch (component.type) {
    case "Button":
      component = omit(component, "handleContentClick"); // prevent warning
      component.element = "a";
      component.href = component.attrs.url;
      break;
    default:
      break;
  }

  if (isActive && props.internals.editingContentFormAttrs) {
    component.attrs = props.internals.editingContentFormAttrs;
  }

  const Component = find(components, { type: component.type });
  if (!(Component && Component.Render)) {
    throw new Error(`Render function is undefined for ${component.type}`);
  }

  const child = React.createElement(
    Component.Render,
    assign({}, props, { component })
  );

  if (!props.internals.isEditor) {
    // If user not editing content, don't show CSS markup that indicates user editing content
    // Also reduced # of DOM nodes by removing wrapper divs
    return child;
  }

  return (
    <div
      style={previewComponentStyles({
        isActive,
        childActive,
      })}
      key={props.internals.key}
      onClick={(e: Event) =>
        props.internals.handleContentClick &&
        props.internals.handleContentClick(e, component.id)
      }
    >
      {child}
    </div>
  );
};
export default RenderComponent;
