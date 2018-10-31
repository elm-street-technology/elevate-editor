// @flow

export type $ContentBlocks = $ContentBlock[];
export type $ContentBlock = {|
  id: string,
  attrs: Object,
  content: $ContentBlocks,
  type: string,
|};

export type $Component = {
  Render: any,
  Preview?: any,
  Form?: any,
  generateContent?: () => $ContentBlocks,
  type: string,
  defaultAttrs?: (Object) => Object,
  defaultContent?: (Object) => $ContentBlocks,
};
export type $Components = $Component[];

export type $Internals = {|
  isEditor: boolean,
  key?: number | string,
  editingContentId: null | string,
  handleContentClick: (e: Event, id: string) => void,
  addChildToContent: Function,
  editingContentFormAttrs: null | Object,
  components: $Components,
|};

export type $SidebarProps = {
  disableDelete: boolean,
  deleteContent: Function,
  cancelEdit: Function,
};
