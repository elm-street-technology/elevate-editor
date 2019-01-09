// @flow

import React, { Fragment, Component } from "react";
// import reduce from "lodash/reduce";
import find from "lodash/find";
import assign from "lodash/assign";

import RenderEditableContent from "./RenderEditableContent";
import type { $ContentBlock, $ContentBlocks, $Internals } from "types";

type $Props = {
  content: $ContentBlocks,
  internals: $Internals,
  parent?: $ContentBlock,
};

type $ChildProps = {
  child: $ContentBlock,
  idx: number,
} & $Props;

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

class RenderChild extends Component<$ChildProps> {
  elementRef;
  reCalculate = (): void => {
    const {
      child: { id, attrs },
      internals: { updateComponentAttrs, editingContentId, isEditor },
    } = this.props;
    if (
      isEditor &&
      updateComponentAttrs &&
      this.elementRef &&
      !editingContentId
    ) {
      const box = this.elementRef.getBoundingClientRect();
      const width = Math.floor(box.width);
      const height = Math.floor(box.height);
      if (
        attrs.calculatedWidth !== width ||
        attrs.calculatedHeight !== height
      ) {
        updateComponentAttrs(
          id,
          assign({}, attrs, {
            calculatedWidth: width,
            calculatedHeight: height,
          })
        );
      }
    }
  };

  refCallback = (element) => {
    this.elementRef = element;
    this.reCalculate();
  };

  componentDidUpdate() {
    this.reCalculate();
  }

  render() {
    const internals = this.props.internals || {};
    const components = internals.components;
    const editingContentId = internals.editingContentId;

    let child: $ContentBlock = { ...this.props.child };
    const isActive = editingContentId === child.id;

    if (isActive && this.props.internals.editingContentFormAttrs) {
      child.attrs = this.props.internals.editingContentFormAttrs;
    }

    const Component = find(components, { type: child.type });
    if (!(Component && Component.Render)) {
      throw new Error(`Render function is undefined for ${child.type}`);
    }

    const element = React.createElement(
      Component.Render,
      assign({}, this.props, {
        content: child,
        onClick: () => null,
        refCallback: this.refCallback,
        reCalculate: this.reCalculate,
      })
    );

    return !this.props.internals.isEditor ? (
      <Fragment key={this.props.idx}>{element}</Fragment>
    ) : (
      <RenderEditableContent
        key={this.props.idx}
        child={child}
        parent={this.props.parent}
        internals={internals}
        isActive={isActive}
      >
        {element}
      </RenderEditableContent>
    );
  }
}

const RenderContent = (props: $Props) => {
  return props.content.map((child, idx) => (
    <RenderChild child={child} key={idx} idx={idx} {...props} />
  ));
};
export default RenderContent;
