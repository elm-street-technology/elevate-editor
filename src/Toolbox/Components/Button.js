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
        children: Yup.string().required(),
        url: Yup.string().required(),
      })
    }
  >
    <Field
      id="children"
      name="children"
      label="Label"
      component={Input}
      type="text"
    />
    <Field id="url" name="url" label="URL" component={Input} type="text" />
  </SidebarForm>
);

export default HorizontalRule;
