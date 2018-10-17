// @flow
import React from "react";
import Button from "elevate-ui/Button";
import DeleteForever from "elevate-ui-icons/DeleteForever";

type Props = {
  className: Object,
  deleteContent: Function,
  id: string,
};

const Delete = ({ className, deleteContent, id }: Props) => (
  <Button
    onClick={() => deleteContent(id)}
    className={className}
    icon={<DeleteForever />}
    type="button"
    color="primary"
  >
    Delete
  </Button>
);

export default Delete;
