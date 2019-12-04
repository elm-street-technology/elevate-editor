/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Dropdown, DropdownOption } from "../Dropdown";

type Props = {
  options: { key: string, label: string }[],
  onChange: Function,
  expanded: boolean,
  doCollapse: Function,
  onExpandEvent: Function,
  doExpand: Function,
  title: string,
};

export default class LayoutComponent extends Component<Props> {
  static propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    expanded: PropTypes.bool,
    doCollapse: PropTypes.func,
    onExpandEvent: PropTypes.func,
    doExpand: PropTypes.func,
    title: PropTypes.string,
  };

  render() {
    const {
      options,
      onChange,
      expanded,
      doCollapse,
      onExpandEvent,
      doExpand,
      title,
    } = this.props;
    return (
      <div className="rdw-fontsize-wrapper" aria-label="rdw-font-size-control">
        <Dropdown
          className="rdw-fontsize-dropdown"
          optionWrapperClassName="rdw-fontfamily-optionwrapper"
          onChange={onChange}
          expanded={expanded}
          doExpand={doExpand}
          doCollapse={doCollapse}
          onExpandEvent={onExpandEvent}
          title={title}
        >
          <span>{title}</span>
          {options.map((item) => (
            <DropdownOption value={`[${item.key}]`} key={item.key}>
              {item.label}
            </DropdownOption>
          ))}
        </Dropdown>
      </div>
    );
  }
}
