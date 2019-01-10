// @flow
import React, { Fragment } from "react";
import { Field } from "formik";
import Input from "elevate-ui/Input";

import GalleryContext from "./Context";

const GalleryForm = ({ images, form }: Object) => {
  return (
    <Fragment>
      <div style={{ color: "#888f96", fontSize: "14px", fontWeight: "bold" }}>
        Please select an image from the list below:
      </div>
      {images &&
        images.length &&
        images.map(({ src }, idx) => (
          <img
            key={idx}
            src={src}
            alt="Selectable img from gallery"
            onClick={() => form.setFieldValue("src", src)}
          />
        ))}
      <Field
        id="width"
        name="width"
        label="Width"
        component={Input}
        type="text"
      />
      <Field
        id="height"
        name="height"
        label="Height"
        component={Input}
        type="number"
      />
      <Field id="alt" name="alt" label="Alt" component={Input} type="text" />
      <Field
        id="title"
        name="title"
        label="Title"
        component={Input}
        type="text"
      />
      <Field
        id="url"
        name="url"
        label="Image Link (optional)"
        component={Input}
        type="url"
      />
    </Fragment>
  );
};

export default (props: Object) => (
  <GalleryContext.Consumer>
    {(contextProps: {
      images: Array<{ src: string, width?: number, height?: number }>,
    }) => <GalleryForm {...contextProps} {...props} />}
  </GalleryContext.Consumer>
);
