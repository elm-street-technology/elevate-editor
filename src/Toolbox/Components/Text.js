// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Text = ({
  component: { id, attrs, type },
  onSave,
  cancelEdit,
}: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    cancelEdit={cancelEdit}
    validationSchema={() =>
      Yup.object().shape({
        value: Yup.string().required("Text value is required"),
      })
    }
    type={type}
  >
    <Field
      id="value"
      name="value"
      label="Text Value"
      component={Input}
      type="text"
    />
  </SidebarForm>
);

export default Text;
