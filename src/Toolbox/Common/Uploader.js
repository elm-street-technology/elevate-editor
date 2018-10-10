// @flow
import React, { Component } from "react";
import uploadcare from "uploadcare-widget";

type Props = {
  id: string,
  name: string,
  onChange: Function,
  field: Object,
  form: Object,
};

// Visual customization: https://uploadcare.com/cookbook/widget_visual/
class Uploader extends Component<Props> {
  uploader = null;

  componentDidMount() {
    const {
      field: { onChange },
      form: { setFieldValue },
    } = this.props;
    const widget = uploadcare.Widget(this.uploader);

    if (onChange && typeof onChange === "function") {
      widget.onChange((file) => {
        if (file) {
          file
            .done((info) => {
              // set the value of the selected image to `src` field value
              setFieldValue("src", info.cdnUrl);
            })
            .fail(() => onChange(null));
        } else {
          onChange(null);
        }
      });
    }
  }

  render() {
    return (
      <input
        type="hidden"
        ref={(input) => (this.uploader = input)}
        {...this.props.field}
        data-crop=""
        role="uploadcare-uploader" // eslint-disable-line
      />
    );
  }
}

export default Uploader;
