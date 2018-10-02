// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

type Props = {
  onToggle?: Function,
  classes: Object,
  active: boolean,
  label: any,
  icon?: Element,
  promptForLink: Function,
};

class StyleButton extends Component<Props> {
  constructor(props) {
    super(props);

    this.onToggle = (e) => {
      e.preventDefault();
      return props.onToggle ? props.onToggle(props.style) : null;
    };
  }

  onToggle;

  render() {
    const { classes, active, label, icon } = this.props;
    return (
      <button
        type="button"
        onClick={this.onToggle}
        className={active ? classes.buttonActive : classes.button}
      >
        {icon ? icon : label}
      </button>
    );
  }
}

const style = (theme) => ({
  button: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    textAlign: "center",
    fontSize: 12,
    color: theme.colors["gray900"],
  },
  buttonActive: {
    extend: "button",
    backgroundColor: theme.colors["secondary"],
  },
});

export default withStyles(style, { name: "StyleButton" })(StyleButton);
