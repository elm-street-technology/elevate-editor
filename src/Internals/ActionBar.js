// @flow

import React from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Add from "elevate-ui-icons/Add";
import Edit from "elevate-ui-icons/Edit";

import Delete from "../Components/Common/Delete";

import type { $Internals, $ContentBlock } from "types";

type Props = {
  classes: Object,
  className: string,
  content: $ContentBlock,
  internals: $Internals,
};

const ActionBar = ({ classes, className, internals, content }: Props) => (
  <div className={classNames(classes.root, className)}>
    {content.attrs.allowChildren ? (
      <button
        type="button"
        className={classes.add}
        onClick={() =>
          internals.addChildToContent && internals.addChildToContent(content.id)
        }
      >
        <Add size={12} />
      </button>
    ) : null}

    <button
      type="button"
      className={classes.alignCenter}
      onClick={(e: Event) =>
        internals.showSidebar && internals.showSidebar(e, content.id)
      }
    >
      {content.type}
      &nbsp;
      <Edit size={12} />
    </button>

    {content.attrs.disableDelete ? null : (
      <Delete
        id={content.id}
        deleteContent={(id) => internals.deleteContent(id)}
      />
    )}
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
  add: {
    display: "flex",
    flexGrow: 1,
  },
});

export default withStyles(styles)(ActionBar);
