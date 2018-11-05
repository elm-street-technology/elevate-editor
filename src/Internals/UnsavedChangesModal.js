// @flow
import React, { Component } from "react";
import Button from "elevate-ui/Button";
import Cancel from "elevate-ui-icons/Cancel";
import Modal from "../Components/Common/Modal";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";
import Submit from "../Components/Common/Submit";

type Props = {
  classes: Object,
  discardChanges: () => void,
  isOpen: boolean,
  type: null | string,
};

class UnsavedChangesModal extends Component<Props> {
  render() {
    const { classes, discardChanges, isOpen, type } = this.props;
    return (
      <Modal isOpen={isOpen}>
        <Typography
          type="heading6"
          className={classes.confirmText}
          gutterBottom
        >
          You have unsaved changes to {type || "a component"}
        </Typography>
        <div className={classes.buttonRow}>
          <Button
            onClick={discardChanges}
            icon={<Cancel />}
            type="button"
            color="#CCCCCC"
            isOutlined
            className={classes.buttonCancel}
          >
            Discard
          </Button>
          <Submit />
        </div>
      </Modal>
    );
  }
}

const styles = (theme) => ({
  confirmText: {
    textAlign: "center",
  },
  buttonRow: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
    paddingRight: 20,
  },
  buttonCancel: {
    marginRight: 8,
  },
});

export default withStyles(styles, { name: "UnsavedChangesModal" })(
  UnsavedChangesModal
);
