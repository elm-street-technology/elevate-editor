// @flow
import React, { Fragment } from "react";

import RenderComponent from "./RenderComponent";

import type { $ContentBlocks, $ContentBlock, $Internals } from "types";
type $Props = {|
  content: $ContentBlocks,
  internals: $Internals,
|};

const GenerateMarkup = (props: $Props) => (
  <Fragment>
    {props.content.map((component: $ContentBlock, idx) => (
      <RenderComponent
        key={idx}
        component={component}
        internals={props.internals}
      />
    ))}
  </Fragment>
);
export default GenerateMarkup;
