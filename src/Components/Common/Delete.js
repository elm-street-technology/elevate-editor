// @flow
import React, { Component, Fragment } from "react";
import Button from "elevate-ui/Button";
import DeleteForever from "elevate-ui-icons/DeleteForever";
import Cancel from "elevate-ui-icons/Cancel";
import Modal from "./Modal";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

type Props = {
  classes: Object,
  deleteContent: Function,
  id: string,
};

type State = {
  showConfirmation: boolean,
};

class Delete extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      showConfirmation: false,
    };
  }

  toggleConfirmation = () => {
    return this.setState((state) => ({
      showConfirmation: !state.showConfirmation,
    }));
  };

  handleDelete = () => {
    this.props.deleteContent(this.props.id);
    return this.toggleConfirmation();
  };

  render() {
    const { classes } = this.props;
    const { showConfirmation } = this.state;
    return (
      <Fragment>
        <button
          type="button"
          onClick={this.toggleConfirmation}
          className={classes.trash}
        >
          <DeleteForever size={12} />
        </button>

        <Modal isOpen={showConfirmation}>
          <Typography
            type="heading6"
            className={classes.confirmText}
            gutterBottom
          >
            Are you sure you want to delete this block?
          </Typography>
          <div className={classes.buttonRow}>
            <Button
              onClick={this.toggleConfirmation}
              icon={<Cancel />}
              type="button"
              color="#CCCCCC"
              isOutlined
              className={classes.buttonCancel}
            >
              Cancel
            </Button>
            <Button
              onClick={() => this.handleDelete()}
              icon={<DeleteForever />}
              type="button"
              color="primary"
            >
              Delete
            </Button>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const styles = (theme) => ({
  trash: {
    display: "flex",
  },
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

export default withStyles(styles, { name: "Delete" })(Delete);
