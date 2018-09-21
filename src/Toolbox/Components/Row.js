// @flow
import React from "react";

import * as Yup from "yup";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Row = ({
  component: { id, attrs },
  onSave,
  cancelEdit,
}: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    cancelEdit={cancelEdit}
    validationSchema={() => Yup.object().shape({})}
  />
);

export default Row;
