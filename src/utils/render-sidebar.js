// @flow

import React from "react";

// import HorizontalRule from "../Toolbox/Components/HorizontalRule";
import Image from "../Toolbox/Components/Image";
import Text from "../Toolbox/Components/Text";
// import Row from "../Toolbox/Components/Row";
// import Video from "../Toolbox/Components/Video";

import type { $SidebarProps } from "../../types";

const Components = {
  Text,
  Image,
};

export default function(props: $SidebarProps) {
  props.component.attrs.padding = props.component.attrs.padding || 0;
  return React.createElement(Components[props.component.type], props);
}
