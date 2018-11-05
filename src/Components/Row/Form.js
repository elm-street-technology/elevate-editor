// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Select from "elevate-ui/Select";

import Padding from "../Common/Padding";
import Alignment from "../Common/Alignment";
import Uploader from "../Common/Uploader";

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
      id="borderSize"
      name="borderSize"
      label="Border Size"
      component={NumberIncrement}
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
    <FastField
      id="direction"
      name="direction"
      label="Direction"
      component={Select}
      items={[
        { label: "Vertical", value: "vertical" },
        { label: "Horizontal", value: "horizontal" },
      ]}
    />
  </Fragment>
);
export default RowForm;
