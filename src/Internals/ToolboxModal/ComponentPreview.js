// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";

type $Props = {
  activeComponent: Object | null,
  classes: Object,
};

const ComponentPreview = ({ activeComponent, classes }: $Props) => {
  if (activeComponent) {
    return (
      <div className={classes.root}>
        <Typography type="heading6" gutterBottom>
          {activeComponent.type} Preview
        </Typography>
        <img
          src={activeComponent && activeComponent.image}
          alt={activeComponent && activeComponent.type}
          className={classes.previewImage}
        />
        <Typography type="body">
          {activeComponent && activeComponent.description}
        </Typography>
      </div>
    );
  } else {
    return (
      <div className={classes.noSelection}>
        <Typography type="body">
          Select a component you would like to add from the sidebar.
        </Typography>
      </div>
    );
  }
};

const styles = (theme) => ({
  root: {
    flex: "0 1 auto",
    position: "relative",
    paddingLeft: 20,
    overflowY: "scroll",
  },
  previewImage: {
    maxWidth: "100%",
    height: "auto",
  },
  noSelection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    paddingLeft: 20,
  },
});

export default withStyles(styles, { name: "ComponentPreview" })(
  ComponentPreview
);
