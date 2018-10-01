// @flow
import React from "react";
import { Formik, Form } from "formik";

import Padding from "./Padding";
import Alignment from "./Alignment";
import Submit from "./Submit";
import Cancel from "./Cancel";

/* Components that should not render the Alignment component */
const omitAlign = ["HorizontalRule", "Row", "Wysiwyg"];

const SidebarForm = ({
  id,
  attrs,
  onSave,
  children,
  validationSchema,
  cancelEdit,
  type,
}) => (
  <Formik
    initialValues={{ ...attrs }}
    validationSchema={validationSchema}
    onSubmit={(values, props) => onSave(id, values)}
    cancelEdit={cancelEdit}
    render={(props) => (
      <Form>
        {children}
        {!omitAlign.includes(type) ? <Alignment /> : null}
        <Padding />
        <Submit />
        <Cancel cancelEdit={cancelEdit} />
      </Form>
    )}
  />
);

export default SidebarForm;
