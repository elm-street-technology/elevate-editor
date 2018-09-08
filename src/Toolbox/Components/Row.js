// @flow
import React from "react";

import * as Yup from "yup";

import SidebarForm from "../Common/SidebarForm";

import type { $SidebarProps } from "../../../types";

const Row = ({ component: { id, attrs }, onSave }: $SidebarProps) => (
  <SidebarForm
    id={id}
    attrs={attrs}
    onSave={onSave}
    validationSchema={() => Yup.object().shape({})}
  />
);

export default Row;
