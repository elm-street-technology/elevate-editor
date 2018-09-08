// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import renderComponent from "../utils/render-component";

import type { $Component } from "../../types";

const Row = ({ classes, attrs, content }: $Component) => (
  <div className={classes && classes.row}>
    {content &&
      content.map((child, idx) => (
        <div key={idx}>
          {renderComponent({
            type: child.type,
            content: child.content,
            attrs: child.attrs,
          })}
        </div>
      ))}
  </div>
);

export default withStyles((theme) => ({
  row: {
    display: "flex",
  },
}))(Row);
