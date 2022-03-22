// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";

import type { $SidebarProps } from "types";

const ScriptForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField
      id="url"
      name="url"
      label="Script URL"
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
  </Fragment>
);
export default ScriptForm;
