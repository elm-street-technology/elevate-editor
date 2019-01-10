// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";
import Search from "elevate-ui-icons/Search";

import ToolboxItem from "./ToolboxItem";

type $Props = {
  activeComponent: Object | null,
  classes: Object,
  components: Array<Object>,
  filterComponents: Array<Object>,
  filterInput: string,
  handleComponentClick: Function,
};

const ComponentList = ({
  activeComponent,
  classes,
  components,
  filterComponents,
  filterInput,
  handleComponentClick,
}: $Props) => (
  <div className={classes.root}>
    <label className={classes.inputWrapper}>
      <input
        className={classes.input}
        type="text"
        value={filterInput}
        onChange={filterComponents}
        placeholder="Filter components..."
        autoFocus
      />
      <Search className={classes.inputIcon} size={32} />
    </label>
    {components.map((component) => {
      if (component.toolbarDisabled) {
        return null;
      }
      return (
        <ToolboxItem
          active={
            activeComponent && activeComponent.type === component.type
              ? true
              : false
          }
          key={component.type}
          className={classes.toolboxItem}
          label={component.label || component.type}
          handleComponentClick={handleComponentClick}
          type={component.type}
        />
      );
    })}
  </div>
);

const styles = (theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    padding: "20px",
    overflowY: "scroll",
    overflowX: "visible",
    borderRight: `1px solid ${theme.colors["gray200"]}`,

    [theme.breakpoints(900)]: {
      flex: "0 0 300px",
    },
  },
  toolboxItem: {
    marginBottom: 10,
  },
  inputWrapper: {
    flex: "0 0 auto",
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 20,
    overflowX: "visible",
  },
  input: {
    display: "block",
    width: "100%",
    height: "40px",
    color: theme.typography.bodyColor,
    fontFamily: "inherit",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    backgroundColor: "#fff",
    border: `1px solid ${theme.colors.gray200}`,
    borderRadius: theme.globalBorderRadius,
    padding: "8px 46px 8px 12px",
    boxShadow: "none", // Reset default inputs for mozilla
    "-webkit-appearance": "none", // Reset default browser styles
    "-moz-appearance": "none", // Reset default browser styles

    "&:focus": {
      outline: "none", // Disable default focus glow
      boxShadow: theme.globalBoxShadow, // Add back focus style
    },

    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  inputIcon: {
    position: "absolute",
    color: theme.colors.gray300,
    right: 10,
  },
});

export default withStyles(styles)(ComponentList);
