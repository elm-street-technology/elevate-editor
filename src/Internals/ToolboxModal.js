// @flow
import React, { Component, Fragment } from "react";
import withStyles from "elevate-ui/withStyles";
import classNames from "classnames";
import find from "lodash/find";
import noScroll from "no-scroll";

import Button from "elevate-ui/Button";
import Cancel from "elevate-ui-icons/Cancel";
import AddCircle from "elevate-ui-icons/AddCircle";

import Sidebar from "./ToolboxModal/Sidebar";
import ComponentPreview from "./ToolboxModal/ComponentPreview";

type $Props = {
  classes: Object,
  className?: string,
  id?: string,
  onSelect: Function,
};

type $State = {
  activeComponent: Object | null,
  components: Array<Object>,
  filteredComponents: Array<Object>,
  filterInput: string,
  parentId: null | string,
};

class ToolboxModalNew extends Component<$Props, $State> {
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
    const { classes, className, onSelect } = this.props;
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
            <ComponentPreview activeComponent={activeComponent} />
          </div>
          <div className={classes.bottom}>
            <Button
              onClick={() => {
                noScroll.off();
                return onSelect(null, null);
              }}
              icon={<Cancel />}
              color="#EEEEEE"
              isOutlined
            >
              Cancel
            </Button>
            <Button
              icon={<AddCircle />}
              disabled={!activeComponent ? true : false}
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
    ...theme.globalPadding,
    border: `1px solid ${theme.colors["gray100"]}`,
    borderRadius: theme.globalBorderRadius,
    backgroundColor: theme.colors["white"],
    boxShadow: theme.globalBoxShadow,
    zIndex: 999,
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
    width: "100%",
  },
  bottom: {
    display: "flex",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    "& *+*": {
      marginLeft: 20,
    },
  },
});

export default withStyles(styles, { name: "ToolboxModalNew" })(ToolboxModalNew);
