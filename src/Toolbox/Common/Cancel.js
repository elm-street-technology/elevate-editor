// @flow
import React from "react";
import Button from "elevate-ui/Button";

const Cancel = ({ cancelEdit }) => (
  <Button
    onClick={cancelEdit}
    type="button"
    color="primary"
    style={{ width: "45%" }}
  >
    Cancel
  </Button>
);

export default Cancel;
