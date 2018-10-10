// @flow

import React from "react";

import Button from "../Toolbox/Components/Button";
import HorizontalRule from "../Toolbox/Components/HorizontalRule";
import Image from "../Toolbox/Components/Image";
import Row from "../Toolbox/Components/Row";
import Text from "../Toolbox/Components/Text";
import Wysiwyg from "../Toolbox/Components/Wysiwyg";

import type { $SidebarProps } from "../../types";

const Components = {
  Button,
  HorizontalRule,
  Image,
  Row,
  Text,
  Wysiwyg,
};

export default function(props: $SidebarProps) {
  props.component.attrs.padding = props.component.attrs.padding || 0;
  return React.createElement(Components[props.component.type], props);
}
