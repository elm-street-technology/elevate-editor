// @flow
import React, { Fragment } from "react";
import { FastField } from "formik";
import withStyles from "elevate-ui/withStyles";
import NumberIncrement from "elevate-ui/NumberIncrement";
import Typography from "elevate-ui/Typography";

type Props = {
  classes: Object,
};

const Padding = ({ classes }: Props) => (
  <Fragment>
    <Typography type="heading6" className={classes.headline}>
      Padding
    </Typography>
    <FastField
      id="paddingTop"
      name="paddingTop"
      label="Top"
      component={NumberIncrement}
    />
    <FastField
      id="paddingRight"
      name="paddingRight"
      label="Right"
      component={NumberIncrement}
    />
    <FastField
      id="paddingBottom"
      name="paddingBottom"
      label="Bottom"
      component={NumberIncrement}
    />
    <FastField
      id="paddingLeft"
      name="paddingLeft"
      label="Left"
      component={NumberIncrement}
    />
  </Fragment>
);

const styles = () => ({
  hide: {
    display: "none",
  },
  headline: {
    display: "flex",
    justifyContent: "flex-start",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  icon: {
    marginLeft: 8,
  },
});

export default withStyles(styles, { name: "Padding" })(Padding);
