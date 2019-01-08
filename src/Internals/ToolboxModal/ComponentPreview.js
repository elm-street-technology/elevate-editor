// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";
import Typography from "elevate-ui/Typography";
import { Tools } from "../..";

import type { $Internals } from "types";

type $Props = {
  activeComponent: Object | null,
  classes: Object,
  internals: $Internals,
};

const ComponentPreview = ({ activeComponent, classes, internals }: $Props) => {
  if (activeComponent) {
    let content = null;
    if (activeComponent.generateContent) {
      content = activeComponent.generateContent();
    }

    if (!Array.isArray(content) && content) {
      content = [content];
    }

    return (
      <div className={classes.root}>
        <Typography type="heading6" gutterBottom>
          {activeComponent.label || activeComponent.type} Preview
        </Typography>
        <div className={classes.content}>
          {content
            ? Tools.renderReact({
                content,
                components: internals.components,
                previewPlaceholders: true,
              })
            : null}
        </div>
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
  preview: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
    border: "1px dotted #ddd",
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
