// @flow
import React, { Fragment } from "react";

import { FastField } from "formik";
import TextEditor from "../Common/TextEditor/TextEditor";
import ColorPicker from "elevate-ui/ColorPicker";

import type { $SidebarProps } from "types";

/*
Yup.object().shape({
  value: Yup.string(),
  color: Yup.string()
})
*/
const TextForm = (props: $SidebarProps) => {
  return (
    <Fragment>
      <FastField id="value" name="value" component={TextEditor} />
      <FastField
        id="color"
        name="color"
        label="Text Color"
        colorMode="hex"
        component={ColorPicker}
      />
    </Fragment>
  );
};
export default TextForm;
