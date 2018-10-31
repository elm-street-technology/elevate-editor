// @flow
import React from "react";

import { FastField } from "formik";
import TextEditor from "../Common/TextEditor/TextEditor";

import type { $SidebarProps } from "types";

/*
Yup.object().shape({
  value: Yup.string(),
})
*/
const TextForm = (props: $SidebarProps) => {
  return <FastField id="value" name="value" component={TextEditor} />;
};
export default TextForm;
