// @flow

export type $Component = {
  id: string,
  attrs: Object,
  content?: Array<Object>,
  type: string,
  paddingTop?: number,
  paddingRight?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  alignment?: string,
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
