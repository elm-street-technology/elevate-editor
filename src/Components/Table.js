// @flow

import React from "react";
import withStyles from "elevate-ui/withStyles";

import EUITable from "elevate-ui/Table";

import type { $Component } from "../../types";

const Table = ({ classes, attrs, content }: $Component) => (
  <div className={classes && classes.Table}>
    <EUITable
      data={attrs.data}
      columns={attrs.columns}
      defaultPageSize={attrs.defaultPageSize || 10}
      defaultSorted={[]}
      filterable
      style={attrs.style || {}}
    />
  </div>
);

export default withStyles((theme) => ({
  Table: {
    display: "flex",
  },
}))(Table);
