// @flow
import React from "react";
import { Field } from "formik";
import Input from "elevate-ui/Input";

const Padding = () => (
  <Field
    id="padding"
    name="padding"
    label="Padding"
    component={Input}
    type="text"
  />
);

export default Padding;
