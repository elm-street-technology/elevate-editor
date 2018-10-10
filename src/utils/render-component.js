// @flow

import React from "react";
import omit from "lodash/omit";
import cloneDeep from "lodash/cloneDeep";

import HorizontalRule from "../Components/HorizontalRule";
import Image from "../Components/Image";
import Text from "../Components/Text";
import Row from "../Components/Row";
import Video from "../Components/Video";
import Button from "elevate-ui/Button";
import Table from "elevate-ui/Table";

import type { $Component } from "../../types";

export const Components = {
  Text,
  Image,
  Video,
  Button,
  HorizontalRule,
  Table,
  Row,
};

export default function(props: $Component) {
  let childProps = cloneDeep(props);
  switch (props.type) {
    case "Button":
      childProps = omit(props, "handleComponentClick"); // prevent warning
      break;
    default:
      break;
  }

  return (
    <div
      key={props.id}
      style={{
        display: "flex",
        width: "100%",
        padding: props.padding,
      }}
    >
      {React.createElement(Components[props.type], childProps)}
    </div>
  );
}
