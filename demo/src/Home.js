import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";

type Props = {
  classes: Object,
  className: string,
};

class Home extends Component<Props> {
  render() {
    const { classes, className } = this.props;
    return (
      <Paper className={classNames(classes.root, className)}>
        <Typography type="title">
          Add a README and put the content of it here too
        </Typography>
      </Paper>
    );
  }
}

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export default withStyles(styles)(Home);
