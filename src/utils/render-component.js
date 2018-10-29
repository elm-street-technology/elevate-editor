// @flow

import React from "react";
import omit from "lodash/omit";
import cloneDeep from "lodash/cloneDeep";

import HorizontalRule from "../Components/HorizontalRule";
import Image from "../Components/Image";
import Text from "../Components/Text";
import Row from "../Components/Row";
import Button from "../Components/Button";
import Container from "../Components/Container";

import type { $Component } from "../../types";

export const Components = {
  Text,
  Image,
  Button,
  HorizontalRule,
  Row,
};

export default function(props: $Component) {
  let childProps = cloneDeep(props);
  switch (props.type) {
    case "Button":
      childProps = omit(props, "handleComponentClick"); // prevent warning
      childProps.element = "a";
      childProps.href = childProps.url;
      break;
    default:
      break;
  }

  return (
    <Container
      key={props.id}
      style={{
        paddingTop: props.paddingTop ? `${props.paddingTop}px` : 0,
        paddingRight: props.paddingRight ? `${props.paddingRight}px` : 0,
        paddingBottom: props.paddingBottom ? `${props.paddingBottom}px` : 0,
        paddingLeft: props.paddingLeft ? `${props.paddingLeft}px` : 0,
        textAlign: props.alignment ? props.alignment : "left",
      }}
    >
      {React.createElement(Components[props.type], childProps)}
    </Container>
  );
}
