// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import Input from "elevate-ui/Input";

import Uploader from "../Common/Uploader";

import type { $SidebarProps } from "types";

/*
Yup.object().shape({
  src: Yup.string().required(),
  upload: Yup.string(),
  width: Yup.number().required(),
  height: Yup.number().required(),
  alt: Yup.string(),
  title: Yup.string(),
  url: Yup.string().url(),
})
*/
const ImageForm = (props: $SidebarProps) => (
  <Fragment>
    <FastField id="src" name="src" label="Src" component={Input} type="text" />
    <FastField
      id="upload"
      name="upload"
      label="Upload a file"
      component={Uploader}
      type="hidden"
      fieldName="src"
    />
    <FastField
      id="width"
      name="width"
      label="Width"
      component={Input}
      type="number"
    />
    <FastField
      id="height"
      name="height"
      label="Height"
      component={Input}
      type="number"
    />
    <FastField id="alt" name="alt" label="Alt" component={Input} type="text" />
    <FastField
      id="title"
      name="title"
      label="Title"
      component={Input}
      type="text"
    />
    <FastField
      id="url"
      name="url"
      label="Image Link (optional)"
      component={Input}
      type="url"
    />
  </Fragment>
);

export default ImageForm;
