// @flow
import React from "react";
import Typography from "elevate-ui/Typography";
import withStyles from "elevate-ui/withStyles";

import Cancel from "../Components/Common/Cancel";
import Submit from "../Components/Common/Submit";

const SidebarForm = ({
  onSave,
  type,
  children,
  cancelEdit,
  breadcrumbs,
  classes,
  internals,
}: Object) => {
  const crumbs = (breadcrumbs || []).slice(0, -1);
  const last = (breadcrumbs || []).slice(-1)[0];
  return (
    <div>
      <Typography type="heading3" gutterBottom>
        Editing {type}
      </Typography>
      <ul className={classes.breadcrumbs}>
        {crumbs.map((crumb, idx) => (
          <li key={`crumb-${crumb.id}`}>
            <a href="#" onClick={(e) => internals.showSidebar(e, crumb.id)}>
              {crumb.label}
            </a>
            <span className={classes.breadCrumbSeparator}>{" / "}</span>
          </li>
        ))}
        {crumbs && !!crumbs.length && last && (
          <li key={`crumb-${last.id}`}>{last.label}</li>
        )}
      </ul>
      <div className={classes.grid}>{children}</div>
      <div className={classes.buttonGroup}>
        <Cancel className={classes.halfButton} cancelEdit={cancelEdit} />
        <Submit className={classes.halfButton} />
      </div>
    </div>
  );
};

const styles = (theme) => ({
  buttonGroup: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
  },
  halfButton: {
    flex: "0 1 45%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: "24px",
  },
  breadcrumbs: {
    marginBottom: "10px",
    marginTop: "-10px",
    "& > li": {
      display: "inline",
    },
  },
  breadCrumbSeparator: {
    fontSize: "0.8rem",
    color: "#111",
  },
});

export default withStyles(styles, { name: "SidebarForm" })(SidebarForm);
