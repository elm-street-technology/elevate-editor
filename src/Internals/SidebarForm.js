// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";

import Submit from "../Components/Common/Submit";
import Cancel from "../Components/Common/Cancel";

const SidebarForm = ({
  onSave,
  type,
  children,
  cancelEdit,
  classes,
}: Object) => {
  return (
    <div>
      <Typography type="heading3">Editing {type}</Typography>
      {children}
      <div className={classes.buttonGroup}>
        <Cancel className={classes.halfButton} cancelEdit={cancelEdit} />
        <Submit className={classes.halfButton} />
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
});

export default withStyles(styles, { name: "SidebarForm" })(SidebarForm);
