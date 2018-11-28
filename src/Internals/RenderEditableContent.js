import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Add from "elevate-ui-icons/Add";
import Constants from "../utils/constants";

import Delete from "../Components/Common/Delete";

type Props = {
  child: Object,
  childActive: boolean,
  children: any,
  classes: Object,
  className: string,
  internals: Object,
  isActive: boolean,
};

class RenderEditableContent extends Component<Props> {
  render() {
    const {
      child,
      children,
      classes,
      className,
      internals,
      isActive,
    } = this.props;
    return (
      <div
        className={classNames(
          classes.root,
          isActive && classes.active,
          className
        )}
        onClick={(e: Event) =>
          internals.showSidebar && internals.showSidebar(e, child.id)
        }
      >
        {children}

        {child.attrs.allowChildren ? (
          <button
            type="button"
            className={classes.add}
            onClick={(e) => {
              e.stopPropagation();
              if (internals.addChildToContent) {
                return internals.addChildToContent(child.id);
              }
            }}
          >
            <Add size={18} />
          </button>
        ) : null}
        {!isActive || child.attrs.disableDelete ? null : (
          <Delete
            className={classes.delete}
            id={child.id}
            deleteContent={(id) => internals.deleteContent(id)}
          />
        )}
      </div>
    );
  }
}

const styles = (theme) => ({
  root: {
    position: "relative",
    "&:hover": {
      boxShadow: "0px 0px 0px 2px rgba(0, 85, 172, 0.5)",
    },
  },
  active: {
    "&:after": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      background: "rgba(0, 85, 172, 0.1)",
      boxShadow: "0px 0px 0px 2px #0055ac",
      zIndex: Constants.zIndex.elementSelected,
    },
  },
  add: {
    position: "absolute",
    bottom: "-12px",
    left: "calc(50% - 12px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    color: theme.colors.gray900,
    background: theme.colors.gray050,
    borderRadius: "50%",
    zIndex: Constants.zIndex.elementAdd,
    boxShadow: theme.globalBoxShadow,
  },
  delete: {
    position: "absolute",
    right: "-24px",
    top: "-2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    color: theme.colors.white,
    background: "#0055ac",
    zIndex: Constants.zIndex.elementDelete,
  },
});

export default withStyles(styles)(RenderEditableContent);
