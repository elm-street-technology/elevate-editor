// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";
import Typography from "elevate-ui/Typography";
import NumberIncrement from "elevate-ui/NumberIncrement";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Button = ({
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
        children: Yup.string().required(),
        url: Yup.string().required(),
        fontSize: Yup.number(),
        color: Yup.string().required(),
        textColor: Yup.string().required(),
        buttonPaddingTop: Yup.number(),
        buttonPaddingRight: Yup.number(),
        buttonPaddingBottom: Yup.number(),
        buttonPaddingLeft: Yup.number(),
      })
    }
    type={type}
  >
    <Field
      id="children"
      name="children"
      label="Button Text"
      component={Input}
      type="text"
    />
    <Field id="url" name="url" label="URL" component={Input} type="text" />
    <Field
      id="fontSize"
      name="fontSize"
      label="Font Size"
      component={Input}
      type="number"
    />
    <Field
      id="color"
      name="color"
      label="Button Color"
      component={Input}
      type="color"
    />
    <Field
      id="textColor"
      name="textColor"
      label="Text Color"
      component={Input}
      type="color"
    />
    <Typography type="heading6">Button Padding</Typography>
    <Field
      id="buttonPaddingTop"
      name="buttonPaddingTop"
      label="Top"
      component={NumberIncrement}
      min="0"
    />
    <Field
      id="buttonPaddingRight"
      name="buttonPaddingRight"
      label="Right"
      component={NumberIncrement}
      min="0"
    />
    <Field
      id="buttonPaddingBottom"
      name="buttonPaddingBottom"
      label="Bottom"
      component={NumberIncrement}
      min="0"
    />
    <Field
      id="buttonPaddingLeft"
      name="buttonPaddingLeft"
      label="Left"
      component={NumberIncrement}
      min="0"
    />
  </SidebarForm>
);

export default Button;
