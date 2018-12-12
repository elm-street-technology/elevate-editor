// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import NumberIncrement from "elevate-ui/NumberIncrement";
import ColorPicker from "elevate-ui/ColorPicker";
import type { $SidebarProps } from "types";
import Padding from "../../Common/Padding";

const RowForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField
      id="backgroundColor"
      name="backgroundColor"
      label="Background Color"
      colorMode="hex"
      component={ColorPicker}
    />
    <Padding />
    <FastField
      id="innerBackgroundColor"
      name="innerBackgroundColor"
      label="Content Background Color"
      colorMode="hex"
      component={ColorPicker}
    />
    <FastField
      id="borderSize"
      name="borderSize"
      label="Border Size"
      component={NumberIncrement}
      min="0"
    />
    <FastField
      id="borderColor"
      name="borderColor"
      label="Border Color"
      colorMode="hex"
      component={ColorPicker}
    />
  </Fragment>
);
export default RowForm;
