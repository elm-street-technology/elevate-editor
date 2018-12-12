// @flow
import { createElement } from "react";
import RenderEditor from "../../HorizontalRule/Render";
import Render from "./Render";
import assign from "lodash/assign";
import HorizontalRule from "../../HorizontalRule";

export default assign({}, HorizontalRule, {
  Render(props: Object) {
    const { isEditor } = props.internals;
    return createElement(isEditor ? RenderEditor : Render, props);
  },
});
