// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Image = ({
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
        mp4: Yup.string(),
        ogg: Yup.string(),
        webm: Yup.string(),
        autoplay: Yup.boolean(),
        width: Yup.number().required(),
        height: Yup.number().required(),
      })
    }
  >
    <Field id="mp4" name="mp4" label="Mp4" component={Input} type="text" />
    <Field id="ogg" name="ogg" label="Ogg" component={Input} type="text" />
    <Field id="webm" name="webm" label="WebM" component={Input} type="text" />
    <Field
      id="autoplay"
      name="autoplay"
      label="Autoplay"
      component={Input}
      type="text"
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
  </SidebarForm>
);

export default Image;
