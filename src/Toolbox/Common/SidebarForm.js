// @flow
import React from "react";
import { Formik, Form } from "formik";
import withStyles from "elevate-ui/withStyles";

import Padding from "./Padding";
import Alignment from "./Alignment";
import Submit from "./Submit";
import Cancel from "./Cancel";
import Delete from "./Delete";

/* Components that should not render the Alignment component */
const omitAlign = ["HorizontalRule", "Row"];

const SidebarForm = ({
  id,
  attrs,
  onSave,
  children,
  validationSchema,
  cancelEdit,
  deleteContent,
  classes,
  type,
}) => (
  <Formik
    initialValues={{ ...attrs }}
    validationSchema={validationSchema}
    onSubmit={(values, props) => onSave(id, values)}
    cancelEdit={cancelEdit}
    deleteContent={deleteContent}
    render={(props) => (
      <Form>
        {children}
        {!omitAlign.includes(type) ? <Alignment /> : null}
        <Padding />
        <div className={classes.buttonGroup}>
          <Submit className={classes.halfButton} />
          <Cancel className={classes.halfButton} cancelEdit={cancelEdit} />
          <Delete
            id={id}
            className={classes.deleteButton}
            deleteContent={deleteContent}
          />
        </div>
      </Form>
    )}
  />
);

const styles = (theme) => ({
  buttonGroup: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  halfButton: {
    flex: "0 1 45%",
  },
  deleteButton: {
    flex: "1 1 100%",
    margin: "12px auto 0",
  },
});

export default withStyles(styles, { name: "SidebarForm" })(SidebarForm);
