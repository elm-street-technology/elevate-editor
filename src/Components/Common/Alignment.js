import React from "react";
import { FastField } from "formik";
import ButtonGroup from "elevate-ui/ButtonGroup";

const items = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
];

const Alignment = () => (
  <FastField
    id="alignment"
    name="alignment"
    label="Alignment"
    component={ButtonGroup}
    items={items}
    color="secondary"
  />
);

export default Alignment;
