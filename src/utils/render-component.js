// @flow

import React from "react";

import HorizontalRule from "../Components/HorizontalRule";
import Image from "../Components/Image";
import Text from "../Components/Text";
import Row from "../Components/Row";

import type { $Component } from "../../types";

const Components = {
  HorizontalRule,
  Image,
  Text,
  Row,
};

export default function({ attrs, content, type }: $Component) {
  return React.createElement(Components[type], { attrs, content });
}
