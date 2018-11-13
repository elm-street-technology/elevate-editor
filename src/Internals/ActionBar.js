// @flow

import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";

import Add from "elevate-ui-icons/Add";
import Edit from "elevate-ui-icons/Edit";

import type { $Internals, $ContentBlock } from "types";

type Props = {
  classes: Object,
  className: string,
  content: $ContentBlock,
  internals: $Internals,
};

const ActionBar = ({ classes, className, internals, content }: Props) => (
  <div className={classNames(classes.root, className)}>
    <button
      type="button"
      color="secondary"
      className={classes.alignCenter}
      onClick={(e: Event) =>
        internals.handleContentClick &&
        internals.handleContentClick(e, content.id)
      }
    >
      {content.type}
      &nbsp;
      <Edit size={12} />
    </button>

    {content.attrs.allowChildren ? (
      <div style={{ marginLeft: "4px" }}>
        <button
          type="button"
          onClick={() =>
            internals.addChildToContent &&
            internals.addChildToContent(content.id)
          }
          color="secondary"
          isOutlined
        >
          <Add size={12} />
        </button>
      </div>
    ) : null}
  </div>
);

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    fontSize: "10px",
    backgroundColor: "#eee",
    justifyContent: "flex-end",
    padding: "0 4px",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
});

export default withStyles(styles)(ActionBar);
