// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";

import type { $SidebarProps } from "types";

const HorizontalRuleForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField
      id="color"
      name="color"
      label="Color"
      component={Input}
      type="color"
    />
    <FastField
      id="thickness"
      name="thickness"
      label="Thickness"
      component={NumberIncrement}
      type="number"
    />
  </Fragment>
);

export default HorizontalRuleForm;
