// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Modal from "elevate-ui/Modal";
import find from "lodash/find";
import Add from "elevate-ui-icons/Add";

import ComponentList from "./ComponentList";
import ComponentPreview from "./ComponentPreview";

import type { $Internals } from "types";

type $Props = {
  classes: Object,
  className?: string,
  id?: string,
  onCancel: Function,
  onSelect: Function,
  theme: Object,
  internals: $Internals,
};

type $State = {
  activeComponent: Object | null,
  components: Array<Object>,
  filteredComponents: Array<Object>,
  filterInput: string,
  parentId: null | string,
};

class ToolboxModal extends Component<$Props, $State> {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: null,
      components: props.components,
      filteredComponents: props.components,
      filterInput: "",
      parentId: props.id || null,
    };
  }

  componentDidUpdate(prevProps: $Props) {
    if (prevProps.id !== this.props.id) {
      this.setState({ parentId: this.props.id });
    }
  }

  filterComponents = (e) => {
    const { components } = this.state;
    const input = e.target.value;
    const filtered = components.filter((component) => {
      if (
        (component.type &&
          component.type.toLowerCase().includes(input.toLowerCase())) ||
        (component.label &&
          component.label.toLowerCase().includes(input.toLowerCase()))
      ) {
        return true;
      }
      return false;
    });

    this.setState({
      filteredComponents: filtered,
      filterInput: input,
    });
  };

  handleComponentClick = (type) => {
    const component = find(
      this.state.components,
      (component) => component.type === type
    );
    this.setState({ activeComponent: component });
  };

  render() {
    const { classes, onCancel, onSelect, internals } = this.props;
    const {
      activeComponent,
      filteredComponents,
      filterInput,
      parentId,
    } = this.state;
    if (!parentId) {
      return null;
    }
    return (
      <Modal
        classes={{ root: classes.root, body: classes.body }}
        cancelText="Cancel"
        confirmAction={() =>
          onSelect(parentId, activeComponent && activeComponent.type)
        }
        confirmIcon={<Add />}
        confirmText="Add Component"
        toggleModal={onCancel}
        title="Select a component"
        visible
      >
        <ComponentList
          activeComponent={activeComponent}
          components={filteredComponents}
          filterComponents={this.filterComponents}
          filterInput={filterInput}
          handleComponentClick={this.handleComponentClick}
        />
        <ComponentPreview
          key={activeComponent && activeComponent.type}
          internals={internals}
          activeComponent={activeComponent}
        />
      </Modal>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "0 auto",
    maxHeight: "90vh",
    border: "none",
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
    "@media (min-width: 450px)": {
      minWidth: "450px",
    },
    [theme.breakpoints(900)]: {
      maxHeight: "70vh",
      maxWidth: "760px",
    },
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default withStyles(styles, { name: "ToolboxModal" })(ToolboxModal);
