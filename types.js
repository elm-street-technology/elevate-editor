// @flow

export type $Component = {
  id: string,
  handleComponentClick?: (Event, string) => void,
  attrs: Object,
  content?: Array<Object>,
  type: string,
  classes?: Object,
};
export type $Components = $Component[];

export type $SidebarProps = {
  component: $Component,
  onSave: (string, Object) => void,
  deleteContent: Function,
  cancelEdit: Function,
  classes: Object,
  className: string,
};
