// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Button from "elevate-ui/Button";
import Cancel from "elevate-ui-icons/Cancel";
import Typography from "elevate-ui/Typography";

import Modal from "../Components/Common/Modal";

type $Props = {
  classes: Object,
  id?: string,
  onSelect: Function,
  components: Array<Object>,
};
type $State = {
  parentId: null | string,
};

class ToolboxModal extends Component<$Props, $State> {
  constructor(props: $Props) {
    super(props);
    this.state = {
      parentId: props.id || null,
    };
  }

  componentDidUpdate(prevProps: $Props) {
    if (prevProps.id !== this.props.id) {
      this.setState({ parentId: this.props.id });
    }
  }

  render() {
    const { parentId } = this.state;
    const { classes, onSelect, components } = this.props;
    if (!parentId) {
      return null;
    }

    return (
      <Modal isOpen={true}>
        <Typography
          type="heading6"
          className={classes.centeredText}
          gutterBottom
        >
          Select a component:
        </Typography>
        {components.map((Component, idx) => (
          <div
            className={classes.component}
            key={idx}
            onClick={() => onSelect(parentId, Component.type)}
          >
            <Component.Preview />
          </div>
        ))}

        <div className={classes.buttonRow}>
          <Button
            onClick={() => onSelect(null, null)}
            icon={<Cancel />}
            type="button"
            color="#CCCCCC"
            isOutlined
            className={classes.buttonCancel}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    );
  }
}

const styles = (theme) => ({
  centeredText: {
    textAlign: "center",
  },
  component: {
    margin: "4px",
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
export default withStyles(styles, { name: "ToolboxModal" })(ToolboxModal);
