// @flow
import React, { Component } from "react";

import renderComponent from "../utils/render-component";

import type { $Components } from "../../types";

type Props = {
  content: $Components,
};
type State = {};

export default class PreviewForMarkup extends Component<Props, State> {
  render() {
    const { content } = this.props;
    return (
      <div>
        {content.map((props, idx) => (
          <div key={idx}>
            {renderComponent({
              id: props.id,
              type: props.type,
              content: props.content,
              ...props.attrs,
            })}
          </div>
        ))}
      </div>
    );
  }
}
