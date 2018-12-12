// @flow
import { createElement } from "react";
import RenderEditor from "../../Image/Render";
import Render from "./Render";
import Image from "../../Image";
import assign from "lodash/assign";

export default assign({}, Image, {
  Render(props: Object) {
    const { isEditor } = props.internals;
    return createElement(isEditor ? RenderEditor : Render, props);
  },
});
