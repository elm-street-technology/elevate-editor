// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Image = ({ component: { id, attrs }, onSave }: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    validationSchema={() =>
      Yup.object().shape({
        src: Yup.string().required(),
        width: Yup.string().required(),
        height: Yup.string().required(),
        alt: Yup.string(),
        title: Yup.string(),
      })
    }
  >
    <Field id="src" name="src" label="Src" component={Input} type="text" />
    <Field
      id="width"
      name="width"
      label="Width"
      component={Input}
      type="number"
    />
    <Field
      id="height"
      name="height"
      label="Height"
      component={Input}
      type="number"
    />
    <Field id="alt" name="alt" label="Alt" component={Input} type="text" />
    <Field
      id="title"
      name="title"
      label="Title"
      component={Input}
      type="text"
    />
  </SidebarForm>
);

export default Image;
