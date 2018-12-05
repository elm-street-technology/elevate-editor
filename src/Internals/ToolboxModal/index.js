// @flow
import React, { Component, Fragment } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import find from "lodash/find";
import noScroll from "no-scroll";

import Button from "elevate-ui/Button";
import Add from "elevate-ui-icons/Add";

import Sidebar from "./ComponentList";
import ComponentPreview from "./ComponentPreview";

import type { $Internals } from "types";

type $Props = {
  classes: Object,
  className?: string,
  id?: string,
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
    const { classes, className, onSelect, theme, internals } = this.props;
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
      <Fragment>
        <div className={classes.mask} />
        <div className={classNames(classes.root, className)}>
          <div className={classes.top}>
            <Sidebar
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
          </div>
          <div className={classes.bottom}>
            <Button
              onClick={() => {
                noScroll.off();
                return onSelect(null, null);
              }}
              color={theme.colors.gray200 || "#EEEEEE"}
              isOutlined
            >
              Cancel
            </Button>
            <Button
              icon={<Add />}
              disabled={!activeComponent ? true : false}
              color="secondary"
              onClick={() => {
                noScroll.off();
                return onSelect(
                  parentId,
                  activeComponent && activeComponent.type
                );
              }}
            >
              Add Component
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    top: 100,
    left: "calc(50% - 450px)",
    width: 900,
    maxWidth: "100%",
    height: "calc(85vh - 100px)",
    borderRadius: theme.globalBorderRadius,
    backgroundColor: theme.colors["white"],
    boxShadow: theme.globalBoxShadow,
    zIndex: 999,
    overflow: "hidden",
  },
  mask: {
    display: "block",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#000000",
    opacity: 0.25,
    zIndex: 99,
  },
  top: {
    flex: "0 1 100%",
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "stretch",
    overflowY: "scroll",
    overflowX: "visible",
    width: "100%",
  },
  bottom: {
    flex: "0 0 auto",
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    borderTop: `1px solid ${theme.colors["gray200"]}`,
    backgroundColor: theme.colors.gray050,
    padding: "12px",
    "& * + *": {
      marginLeft: "12px",
    },
  },
});

export default withStyles(styles, { name: "ToolboxModal" })(ToolboxModal);
