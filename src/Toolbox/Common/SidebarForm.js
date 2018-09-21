// @flow
import React from "react";
import { Formik, Form } from "formik";

import Padding from "./Padding";
import Submit from "./Submit";
import Cancel from "./Cancel";

const SidebarForm = ({
  id,
  attrs,
  onSave,
  children,
  validationSchema,
  cancelEdit,
}) => (
  <Formik
    initialValues={{ ...attrs }}
    validationSchema={validationSchema}
    onSubmit={(values, props) => onSave(id, values)}
    cancelEdit={cancelEdit}
    render={() => (
      <Form>
        {children}
        <Padding />
        <Submit />
        <Cancel cancelEdit={cancelEdit} />
      </Form>
    )}
  />
);

export default SidebarForm;
