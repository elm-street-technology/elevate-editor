// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";

import Submit from "../Components/Common/Submit";
import Cancel from "../Components/Common/Cancel";
import Delete from "../Components/Common/Delete";

const SidebarForm = ({
  disableDelete,
  onSave,
  type,
  children,
  cancelEdit,
  deleteContent,
  classes,
}: Object) => {
  return (
    <div>
      <Typography type="heading3">Editing {type}</Typography>
      {children}
      <div className={classes.buttonGroup}>
        <Cancel className={classes.halfButton} cancelEdit={cancelEdit} />
        <Submit className={classes.halfButton} />
        {disableDelete ? null : (
          <Delete
            className={classes.deleteButton}
            deleteContent={deleteContent}
          />
        )}
      </div>
    </div>
  );
};

const styles = (theme) => ({
  buttonGroup: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
  },
  halfButton: {
    flex: "0 1 45%",
  },
  deleteButton: {
    flex: "1 1 100%",
    margin: "12px auto 0",
  },
});

export default withStyles(styles, { name: "SidebarForm" })(SidebarForm);
