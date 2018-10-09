// @flow
import React from "react";
import { Formik, Form } from "formik";

import Padding from "./Padding";
import Submit from "./Submit";

const SidebarForm = ({ id, attrs, onSave, children, validationSchema }) => (
  <Formik
    initialValues={attrs}
    validationSchema={validationSchema}
    onSubmit={(values, props) => onSave(id, values)}
    render={() => (
      <Form>
        {children}
        <Padding />
        <Submit />
      </Form>
    )}
  />
);

export default SidebarForm;
