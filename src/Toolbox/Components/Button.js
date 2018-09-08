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
}: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    validationSchema={() =>
      Yup.object().shape({
        children: Yup.string(),
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
  </SidebarForm>
);

export default HorizontalRule;
