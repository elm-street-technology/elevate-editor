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
import Icon from "elevate-ui/Icon/Icon";

import type { $Component } from "../../types";

export const Components = {
  HorizontalRule,
  Image,
  Text,
  Row,
  Video,
  Button,
  Table,
  Icon,
};

export default function(props: $Component) {
  let childProps = cloneDeep(props);
  switch (props.type) {
    case "Button":
    case "Icon":
      childProps = omit(props, "handleComponentClick"); // prevent warning
      break;
    default:
      break;
  }
  // console.log("====> props", props);
  return (
    <div
      key={props.id}
      onClick={(e) => props.handleComponentClick(e, props.id)}
    >
      {React.createElement(Components[props.type], childProps)}
    </div>
  );
}
