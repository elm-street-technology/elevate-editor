// @flow
import React from "react";

import * as Yup from "yup";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Row = ({
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
    validationSchema={() => Yup.object().shape({})}
    type={type}
  />
);

export default Row;
