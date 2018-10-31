// @flow
import React from "react";
import Button from "elevate-ui/Button";
import CancelIcon from "elevate-ui-icons/Cancel";

type Props = {
  cancelEdit: Function,
  className: Object,
};

const Cancel = ({ cancelEdit, className }: Props) => (
  <Button
    onClick={cancelEdit}
    icon={<CancelIcon />}
    type="button"
    color="#CCCCCC"
    isOutlined
    className={className}
  >
    Cancel
  </Button>
);

export default Cancel;
