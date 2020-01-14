// @flow
import { Component } from "react";
//$FlowIgnore
import { withRouter } from "react-router-dom";
//$FlowIgnore
import type { ContextRouter } from "react-router-dom";

type Props = {
  children: any,
  closeMenu: Function,
  ...ContextRouter,
};
type State = {};

class RouteListener extends Component<Props, State> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      this.props.closeMenu();
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(RouteListener);
