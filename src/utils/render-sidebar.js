// @flow

import React from "react";

// import HorizontalRule from "../Toolbox/Components/HorizontalRule";
// import Image from "../Toolbox/Components/Image";
import Text from "../Toolbox/Components/Text";
// import Row from "../Toolbox/Components/Row";
// import Video from "../Toolbox/Components/Video";

import type { $SidebarProps } from "../../types";

const Components = {
  Text,
};

export default function(props: $SidebarProps) {
  return React.createElement(Components[props.component.type], props);
}
