// @flow
import React from "react";
import Button from "elevate-ui/Button";
import Save from "elevate-ui-icons/Save";

type Props = {
  className: Object,
};

const Submit = ({ className }: Props) => (
  <Button className={className} icon={<Save />} color="secondary" type="submit">
    Save
  </Button>
);

export default Submit;
