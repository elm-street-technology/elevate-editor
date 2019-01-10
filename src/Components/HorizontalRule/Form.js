// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import NumberIncrement from "elevate-ui/NumberIncrement";
import ColorPicker from "elevate-ui/ColorPicker";

import type { $SidebarProps } from "types";

const HorizontalRuleForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField id="color" name="color" label="Color" component={ColorPicker} />
    <FastField
      id="thickness"
      name="thickness"
      label="Thickness"
      component={NumberIncrement}
      min="1"
      type="number"
    />
  </Fragment>
);

export default HorizontalRuleForm;
