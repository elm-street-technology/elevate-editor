// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const HorizontalRule = ({
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
        color: Yup.string().required(),
        thickness: Yup.number().required(),
      })
    }
  >
    <Field
      id="color"
      name="color"
      label="Color"
      component={Input}
      type="color"
    />
    <Field
      id="thickness"
      name="thickness"
      label="Thickness"
      component={Input}
      type="number"
    />
  </SidebarForm>
);

export default HorizontalRule;
