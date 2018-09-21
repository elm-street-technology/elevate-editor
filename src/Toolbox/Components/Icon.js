// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Icon = ({
  component: { id, attrs },
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
        color: Yup.string(),
      })
    }
  >
    <Field
      id="name"
      name="name"
      label="Icon Name"
      component={Input}
      type="text"
    />
    <Field id="size" name="size" label="Size" component={Input} type="number" />
    <Field
      id="color"
      name="color"
      label="Color"
      component={Input}
      type="color"
    />
  </SidebarForm>
);

export default Icon;
