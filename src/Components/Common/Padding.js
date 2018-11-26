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
    <div className={classes.grid}>
      <FastField
        id="paddingTop"
        name="paddingTop"
        label="Top"
        component={NumberIncrement}
        min="0"
      />
      <FastField
        id="paddingRight"
        name="paddingRight"
        label="Right"
        component={NumberIncrement}
        min="0"
      />
      <FastField
        id="paddingLeft"
        name="paddingLeft"
        label="Left"
        component={NumberIncrement}
        min="0"
      />
      <FastField
        id="paddingBottom"
        name="paddingBottom"
        label="Bottom"
        component={NumberIncrement}
        min="0"
      />
    </div>
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
  grid: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "16px",
  },
});

export default withStyles(styles, { name: "Padding" })(Padding);
