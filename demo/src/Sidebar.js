import React from "react";
import withStyles from "elevate-ui/withStyles";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Link className={classes.logoLink} to="/" title="Back to Home">
        <Logo />
      </Link>
      <nav className={classes.nav}>
        <span className={classes.header}>Editors</span>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/new-web"
        >
          Blank Web Example
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/new-email"
        >
          Blank email Example
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/email"
        >
          Email Example
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/email-2"
        >
          Email Align/Button
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/grid"
        >
          Grid Example
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/listing-flyer"
        >
          Listing Flyer
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/page-example-one"
        >
          Page Example
        </NavLink>
        <NavLink
          activeClassName={classes.active}
          className={classes.item}
          to="/editor/page-example-two"
        >
          Page Example Two
        </NavLink>
      </nav>
    </div>
  );
};

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.colors.white,
  },
  logoLink: {
    display: "flex",
    margin: "0 auto 8px",
    padding: "24px 16px 8px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "24px",
  },
  header: {
    fontSize: "12px",
    lineHeight: "1",
    color: "#b3bac1",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "16px",
    borderBottom: `1px solid ${theme.colors.gray200}`,
    marginBottom: "12px",
  },
  item: {
    flexShrink: "0",
    display: "flex",
    color: theme.colors.gray800,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "14px",
    textDecoration: "none",
    padding: "6px 16px",
    borderLeft: `4px solid transparent`,
    margin: "4px 0",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    transitionDuration: "200ms",

    "&:hover": {
      borderLeft: `4px solid ${theme.colors.secondary}`,
    },
  },
  active: {
    color: theme.colors.secondary,
    borderLeft: `4px solid ${theme.colors.secondary}`,
  },
}))(Sidebar);
