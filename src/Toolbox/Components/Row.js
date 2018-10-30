// @flow
import React from "react";

import * as Yup from "yup";
import { Field } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";

import SidebarForm from "../Common/SidebarForm";
import Padding from "../Common/Padding";
import Alignment from "../Common/Alignment";

import type { $SidebarProps } from "../../../types";

const Row = ({
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
    validationSchema={() => Yup.object().shape({})}
    type={type}
  >
    <Field
      id="backgroundColor"
      name="backgroundColor"
      label="Background Color"
      component={Input}
      type="color"
    />
    <Padding />
    <Alignment />
    <Field
      id="width"
      name="width"
      label="Width"
      component={Input}
      type="text"
    />
    <Field
      id="borderSize"
      name="borderSize"
      label="Border Size"
      component={NumberIncrement}
    />
    <Field
      id="borderColor"
      name="borderColor"
      label="Border Color"
      component={Input}
      type="color"
    />
  </SidebarForm>
);

export default Row;
