// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Select from "elevate-ui/Select";

import Padding from "../Common/Padding";
import Uploader from "../Common/Uploader";
import Alignment from "../Common/Alignment";

import type { $SidebarProps } from "types";

const RowForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField
      id="backgroundColor"
      name="backgroundColor"
      label="Background Color"
      component={Input}
      type="color"
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
      id="mobile.width"
      name="mobile.width"
      label="Mobile Width"
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
      component={Input}
      type="color"
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
