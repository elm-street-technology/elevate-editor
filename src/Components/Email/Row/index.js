// @flow
import { createElement } from "react";
import RenderEditor from "../../Row/Render";
import Render from "./Render";
import Form from "./Form";
import Row from "../../Row";
import assign from "lodash/assign";

export default assign({}, Row, {
  Form,
  Render(props: Object) {
    const { isEditor } = props.internals;
    return createElement(isEditor ? RenderEditor : Render, props);
  },
});
