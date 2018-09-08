// @flow

import React from "react";

import HorizontalRule from "../Components/HorizontalRule";
import Image from "../Components/Image";
import Text from "../Components/Text";
import Row from "../Components/Row";
import Video from "../Components/Video";
import Button from "../Components/Button";
import Table from "../Components/Table";
import Icon from "../Components/Icon";

import type { $Component } from "../../types";

const Components = {
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
  return React.createElement(Components[props.type], props);
}
