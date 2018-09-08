// @flow

import React from "react";

import Button from "../Toolbox/Components/Button";
import HorizontalRule from "../Toolbox/Components/HorizontalRule";
import Icon from "../Toolbox/Components/Icon";
import Image from "../Toolbox/Components/Image";
import Row from "../Toolbox/Components/Row";
import Text from "../Toolbox/Components/Text";
import Video from "../Toolbox/Components/Video";

import type { $SidebarProps } from "../../types";

const Components = {
  Button,
  HorizontalRule,
  Icon,
  Image,
  Row,
  Text,
  Video,
};

export default function(props: $SidebarProps) {
  props.component.attrs.padding = props.component.attrs.padding || 0;
  return React.createElement(Components[props.component.type], props);
}
