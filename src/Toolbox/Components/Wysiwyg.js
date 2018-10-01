// @flow
import React from "react";

import { Field } from "formik";
import * as Yup from "yup";

import SidebarForm from "../Common/SidebarForm";
import TextEditor from "../Common/TextEditor/TextEditor";

// import type { $SidebarProps, $Components } from "../../../types";
import type { $SidebarProps } from "../../../types";

const Wysiwyg = ({
  component: { id, attrs, type },
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
        value: Yup.string(),
      })
    }
    initialValues={{
      value: attrs.value || null,
    }}
    type={type}
  >
    <Field id="value" name="value" component={TextEditor} />
  </SidebarForm>
);

export default Wysiwyg;
