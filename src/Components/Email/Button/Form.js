// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";
import ColorPicker from "elevate-ui/ColorPicker";
import Select from "elevate-ui/Select";
import Padding from "../../Common/Padding";

import type { $SidebarProps } from "types";

const fontFamilies = [
  { label: "Arial", value: "Arial, Helvetica, sans-serif" },
  { label: "Arial Black", value: "‘Arial Black’, Gadget, sans-serif" },
  { label: "Bookman Old Style", value: "‘Bookman Old Style’, serif" },
  { label: "Comic Sans MS", value: "‘Comic Sans MS’, cursive" },
  { label: "Courier", value: "Courier, monospace" },
  { label: "Courier New", value: "‘Courier New’, Courier, monospace" },
  { label: "Garamond", value: "Garamond, serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Impact", value: "Impact, Charcoal, sans-serif" },
  { label: "Lucida Console", value: "‘Lucida Console’, Monaco, monospace" },
  {
    label: "Lucida Sans Unicode",
    value: "‘Lucida Sans Unicode’, ‘Lucida Grande’, sans-serif",
  },
  { label: "MS Sans Serif", value: "‘MS Sans Serif’, Geneva, sans-serif;" },
  {
    label: "‘MS Serif’",
    value: "‘MS Serif’, ‘New York’, sans-serif;",
  },
  {
    label: "Palatino Linotype",
    value: "‘Palatino Linotype’, ‘Book Antiqua’, Palatino, serif;",
  },
  { label: "Symbol", value: "Symbol, sans-serif" },
  { label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
  { label: "Times New Roman", value: "‘Times New Roman’, Times, serif" },
  { label: "Trebuchet MS", value: "‘Trebuchet MS’, Helvetica, sans-serif" },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
];
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
      id="fontFamily"
      name="fontFamily"
      label="Font Family"
      component={Select}
      items={fontFamilies}
    />
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
      component={ColorPicker}
    />
    <Padding />
  </Fragment>
);

export default ButtonForm;
