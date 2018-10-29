// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";
import Uploader from "../Common/Uploader";

import type { $SidebarProps } from "../../../types";

const Image = ({
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
        src: Yup.string().required(),
        upload: Yup.string(),
        width: Yup.number().required(),
        height: Yup.number().required(),
        alt: Yup.string(),
        title: Yup.string(),
        url: Yup.string().url(),
      })
    }
    type={type}
  >
    <Field id="src" name="src" label="Src" component={Input} type="text" />
    <Field
      id="upload"
      name="upload"
      label="Upload a file"
      component={Uploader}
      type="hidden"
    />
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
    <Field
      id="url"
      name="url"
      label="Image Link (optional)"
      component={Input}
      type="url"
    />
  </SidebarForm>
);

export default Image;
