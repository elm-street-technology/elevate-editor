// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import type { $SidebarProps } from "types";

/*
Yup.object().shape({
  children: Yup.string().required(),
  url: Yup.string().required(),
  fontSize: Yup.number(),
  color: Yup.string().required(),
  textColor: Yup.string().required(),
  buttonPaddingTop: Yup.number(),
  buttonPaddingRight: Yup.number(),
  buttonPaddingBottom: Yup.number(),
  buttonPaddingLeft: Yup.number(),
})
*/
const IframeForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField id="src" name="src" label="URL" component={Input} type="text" />
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
  </Fragment>
);

export default IframeForm;
