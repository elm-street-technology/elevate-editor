// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import renderComponent from "../utils/render-component";

import type { $Component } from "../../types";

const Row = ({ id, classes, content, handleComponentClick }: $Component) => (
  <div className={classes && classes.row}>
    {content &&
      content.map((child, idx) => {
        return (
          <div key={idx}>
            {renderComponent({
              id: child.id,
              type: child.type,
              content: child.content,
              ...child.attrs,
              handleComponentClick,
            })}
          </div>
        );
      })}
  </div>
);

export default withStyles((theme) => ({
  row: {
    display: "flex",
  },
}))(Row);
