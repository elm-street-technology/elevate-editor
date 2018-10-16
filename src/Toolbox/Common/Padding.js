// @flow
import React, { Fragment } from "react";
import { Field } from "formik";
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
    <Field
      id="paddingTop"
      name="paddingTop"
      label="Top"
      component={NumberIncrement}
    />
    <Field
      id="paddingRight"
      name="paddingRight"
      label="Right"
      component={NumberIncrement}
    />
    <Field
      id="paddingBottom"
      name="paddingBottom"
      label="Bottom"
      component={NumberIncrement}
    />
    <Field
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
