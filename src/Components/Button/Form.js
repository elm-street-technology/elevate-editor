// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import NumberIncrement from "elevate-ui/NumberIncrement";
import ColorPicker from "elevate-ui/ColorPicker";

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
const ButtonForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField
      id="children"
      name="children"
      label="Button Text"
      component={Input}
      type="text"
    />
    <FastField id="url" name="url" label="URL" component={Input} type="text" />
    <FastField
      id="fontSize"
      name="fontSize"
      label="Font Size"
      component={Input}
      type="number"
    />
    <FastField
      id="backgroundColor"
      name="backgroundColor"
      label="Button Color"
      component={ColorPicker}
    />
    <FastField
      id="color"
      name="color"
      label="Text Color"
      component={ColorPicker}
    />
    <Typography type="heading6">Button Padding</Typography>
    <FastField
      id="paddingTop"
      name="paddingTop"
      label="Top"
      component={NumberIncrement}
      min="0"
    />
    <FastField
      id="paddingRight"
      name="paddingRight"
      label="Right"
      component={NumberIncrement}
      min="0"
    />
    <FastField
      id="paddingBottom"
      name="paddingBottom"
      label="Bottom"
      component={NumberIncrement}
      min="0"
    />
    <FastField
      id="paddingLeft"
      name="paddingLeft"
      label="Left"
      component={NumberIncrement}
      min="0"
    />
  </Fragment>
);

export default ButtonForm;
