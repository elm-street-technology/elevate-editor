// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Select from "elevate-ui/Select";

import Padding from "../../Common/Padding";
import Uploader from "../../Common/Uploader";
import Alignment from "../../Common/Alignment";
import ColorPicker from "elevate-ui/ColorPicker";

import type { $SidebarProps } from "types";

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
    <Alignment />
    <FastField
      id="width"
      name="width"
      label="Width"
      component={Input}
      type="text"
    />
    <FastField
      id="height"
      name="height"
      label="Height"
      component={Input}
      type="text"
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
    <FastField
      id="backgroundImage"
      name="backgroundImage"
      label="Background Image (optional)"
      component={Input}
      type="text"
    />
    <FastField
      id="upload"
      name="upload"
      label="Upload a file"
      component={Uploader}
      UPLOADCARE_API_KEY={props.UPLOADCARE_API_KEY}
      type="hidden"
      fieldName="backgroundImage"
    />
    <FastField
      id="backgroundSize"
      name="backgroundSize"
      label="Background Size"
      component={Select}
      items={[
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ]}
    />
  </Fragment>
);
export default RowForm;
