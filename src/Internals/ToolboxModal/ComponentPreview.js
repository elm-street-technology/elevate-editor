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
        <Typography type="body" gutterTop>
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
    flex: "1 1 auto",
    position: "relative",
    overflowY: "scroll",
    padding: "20px",
  },
  previewImage: {
    maxWidth: "100%",
    height: "auto",
  },
  noSelection: {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100%",
    padding: "20px",
  },
});

export default withStyles(styles, { name: "ComponentPreview" })(
  ComponentPreview
);
