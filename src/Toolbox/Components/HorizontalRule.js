// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const HorizontalRule = ({
  component: { id, attrs, type },
  onSave,
  cancelEdit,
  deleteContent,
}: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    cancelEdit={cancelEdit}
    deleteContent={deleteContent}
    validationSchema={() =>
      Yup.object().shape({
        color: Yup.string().required(),
        thickness: Yup.number().required(),
      })
    }
    type={type}
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
      component={NumberIncrement}
      type="number"
    />
  </SidebarForm>
);

export default HorizontalRule;
