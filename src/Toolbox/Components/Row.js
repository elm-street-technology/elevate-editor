// @flow
import React from "react";

import * as Yup from "yup";
import { Field } from "formik";
import Input from "elevate-ui/Input";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Select from "elevate-ui/Select";

import SidebarForm from "../Common/SidebarForm";
import Padding from "../Common/Padding";
import Alignment from "../Common/Alignment";
import Uploader from "../Common/Uploader";

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
    <Field
      id="backgroundImage"
      name="backgroundImage"
      label="Background Image (optional)"
      component={Input}
      type="text"
    />
    <Field
      id="upload"
      name="upload"
      label="Upload a file"
      component={Uploader}
      type="hidden"
      fieldName="backgroundImage"
    />
    <Field
      id="backgroundSize"
      name="backgroundSize"
      label="Background Size"
      component={Select}
      items={[
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ]}
    />
  </SidebarForm>
);

export default Row;
