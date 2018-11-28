// @flow

export type $ContentBlocks = $ContentBlock[];
export type $ContentBlock = {|
  id: string,
  attrs: Object,
  content: $ContentBlocks,
  type: string,
|};

export type $Component = {
  Render?: any,
  Preview?: any,
  Form?: any,
  generateContent?: ({ parent?: $ContentBlock }) => $ContentBlocks,
  type: string,
  defaultAttrs?: (Object) => Object,
};
export type $Components = $Component[];

export type $Internals = {|
  isEditor: boolean,
  key?: number | string,
  editingContentId: null | string,
  showSidebar: (e: Event, id: string) => void,
  addChildToContent: Function,
  editingContentFormAttrs: null | Object,
  components: $Components,
  deleteContent: Function,
|};

export type $SidebarProps = {
  cancelEdit: Function,
};
