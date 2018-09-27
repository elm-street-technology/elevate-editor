import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";

class StyleButton extends Component {
  constructor(props) {
    super(props);

    this.onToggle = (e) => {
      e.preventDefault();
      props.onToggle(props.style);
    };
  }

  render() {
    const { classes, active } = this.props;
    return (
      <button
        type="button"
        onClick={this.onToggle}
        className={active ? classes.buttonActive : classes.button}
      >
        {this.props.label}
      </button>
    );
  }
}

const style = (theme) => ({
  button: {
    width: 30,
    height: 30,
    textAlign: "center",
    color: theme.colors["gray900"],
  },
  buttonActive: {
    extend: "button",
    backgroundColor: theme.colors["secondary"],
  },
});

export default withStyles(style, { name: "StyleButton" })(StyleButton);
