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
  Form?: any,
  generateContent?: ({ parent?: $ContentBlock }) => $ContentBlocks,
  type: string,
  label?: string,
  description?: string,
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
  previewPlaceholders?: boolean,
  updateComponentAttrs?: Function,
  placeholders?: { [string]: string },
  replacements?: { [string]: string },
|};

export type $RenderReactProps = {
  content: $ContentBlocks,
  components?: $Components,
  previewPlaceholders?: boolean,
};

export type $SidebarProps = {
  cancelEdit: Function,
  UPLOADCARE_API_KEY: string,
  editingContentId: string,
  placeholders?: { [string]: string },
  replacements?: { [string]: string },
};

export type $ExportOptions = {
  inlineCss: boolean,
  content: $ContentBlocks,
  components: $Components,
};
