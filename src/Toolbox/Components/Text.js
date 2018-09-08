// @flow
import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Input from "elevate-ui/Input";
import Button from "elevate-ui/Button";

import type { $SidebarProps } from "../../../types";

const Text = ({
  component: {
    id,
    attrs: { value },
  },
  onSave,
}: $SidebarProps) => (
  <Formik
    initialValues={{
      value,
    }}
    validationSchema={() =>
      Yup.object().shape({
        value: Yup.string().required("Text value is required"),
      })
    }
    onSubmit={(values, props) => {
      // Manually submit the form using a regular form POST rather than AJAX
      return onSave(id, values);
    }}
    render={() => (
      <Form>
        <Field
          id="value"
          name="value"
          label="Text Value"
          component={Input}
          type="text"
        />
        <Button type="submit" style={{ width: "100%" }}>
          Save
        </Button>
      </Form>
    )}
  />
);

export default Text;
