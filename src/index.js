// @flow
import React, { Component } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import { Formik, Form } from "formik";
import { DragDropContext } from "react-beautiful-dnd";
import find from "lodash/find";
import values from "lodash/values";
import transform from "lodash/transform";
import ThemeProvider from "elevate-ui/ThemeProvider";
import ReactDOMServer from "react-dom/server";
import noScroll from "no-scroll";

import generateUUID from "./utils/generate-uuid";
import Constants from "./utils/constants";

import RenderContent from "./Internals/RenderContent";
import SidebarForm from "./Internals/SidebarForm";
import ToolboxModal from "./Internals/ToolboxModal";
import UnsavedChangesModal from "./Internals/UnsavedChangesModal";

import ToolboxItem from "./Components/Common/ToolboxItem";
import Button from "./Components/Button";
import HorizontalRule from "./Components/HorizontalRule";
import Image from "./Components/Image";
import Row from "./Components/Row";
import Text from "./Components/Text";

import type {
  $ContentBlock,
  $ContentBlocks,
  $Components,
  $Component,
} from "types";

const InternalComponents = [Button, HorizontalRule, Image, Row, Text];

type Props = {
  classes: Object,
  components?: $Components,
  content: $ContentBlocks,
};
type State = {
  content: $ContentBlocks,
  editingContent: null | $ContentBlock,
  components: $Components,
  toolboxModalId: null | string,
  unsavedChanges: null | string | Function, // id of component to edit after saving or discarding changes or a callback Fn
};

// a little function to help us with reordering the result
function reorderContent(components, startIndex, endIndex) {
  if (!(components && components.length)) {
    return components;
  }

  const result = [...components];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

function renderReact(
  content: $ContentBlocks = [],
  components: $Components = []
) {
  const allComponents = combineComponents(components);
  return (
    <ThemeProvider
      theme={{
        colors: {},
        overrides: {
          EuiInput: {
            root: {
              background: "red",
            },
          },
          EuiScaffold: {
            root: {
              margin: "0 auto",
              background: "red",
            },
          },
        },
      }}
    >
      <RenderContent
        content={Editor.setDefaultProps(content, allComponents)}
        internals={{
          isEditor: false, // an indicator to not show CSS related to editing content
          components: allComponents,
          addChildToContent: () => {},
          deleteContent: () => {},
          showSidebar: (e, id) => {
            return;
          },
          editingContentFormAttrs: null,
          editingContentId: null,
        }}
      />
    </ThemeProvider>
  );
}

function combineComponents(components: $Components = []) {
  // Add default components, but allows props.components to overwrite default components
  const combined = components && components.length ? [...components] : [];
  InternalComponents.forEach((component) => {
    if (!find(components, { type: component.type })) {
      combined.push(component);
    }
  });
  return combined;
}

class Editor extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    const components = combineComponents(props.components);

    this.state = {
      editingContent: null,
      content: Editor.setDefaultProps(
        props.content && props.content.length
          ? props.content
          : [
              {
                id: generateUUID(),
                type: "Row",
                attrs: {
                  disableDelete: true,
                },
                content: [],
              },
            ],
        components
      ),
      components,
      toolboxModalId: null,
      unsavedChanges: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.content) !== JSON.stringify(this.props.content)
    ) {
      this.setState({
        content: Editor.setDefaultProps(
          this.props.content,
          this.state.components
        ),
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownListener, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownListener, false);
  }

  keydownListener = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      // Escape key
      if (this.state.editingContent) {
        this.cancelEdit();
      }
    }
  };

  static setDefaultProps(
    content: $ContentBlocks,
    components: $Components
  ): $ContentBlocks {
    return content.map((child: $ContentBlock) => {
      const component: $Component = find(components, { type: child.type });
      if (
        !(
          component.defaultAttrs && typeof component.defaultAttrs === "function"
        )
      ) {
        throw new Error(
          `${
            child.type
          } must have Fn defaultAttrs({}) which returns default values for all form fields`
        );
      }
      return {
        id: child.id || generateUUID(),
        type: child.type,
        attrs: component.defaultAttrs(child.attrs || {}),
        content:
          child.content && child.content.length
            ? Editor.setDefaultProps(child.content, components)
            : Editor.setDefaultProps([], components),
      };
    });
  }

  exportHTML = (
    content: $ContentBlocks = this.state.content,
    components: $Components = this.state.components
  ) => {
    return ReactDOMServer.renderToStaticMarkup(
      renderReact(content, components)
    );
  };

  exportJSON = () => {
    return this.state.content;
  };

  /**
   * Used by parent before exporting json/html to make sure the last editted content block is fully saved
   * Returns boolean, but has side effect of triggering unsaved changes modal
   */
  hasUnsavedChanges(cb: Function): boolean {
    const activeContentBlockId =
      this.state.editingContent && this.state.editingContent.id;
    if (activeContentBlockId) {
      this.setState({ unsavedChanges: cb });
      return true; // Indicator to parent form to wait on exporting json / html
    }
    return false; // Indicator to parent form it's ok to export json / html
  }

  handleUnsavedChanges() {
    const contentIdOrCallback = this.state.unsavedChanges;
    if (contentIdOrCallback && typeof contentIdOrCallback !== "function") {
      this.showSidebar(null, contentIdOrCallback);
    } else if (contentIdOrCallback) {
      contentIdOrCallback(); // callback function from parent after we confirmed latest component changes were saved or discarded
    }
  }

  cancelEdit = () => {
    this.setState(
      {
        editingContent: null,
        toolboxModalId: null,
      },
      () => this.handleUnsavedChanges()
    );
  };

  openToolboxModal = (toolboxModalId: string) => {
    this.setState({ toolboxModalId }, () => noScroll.on());
  };

  deleteContent = (contentId) => {
    if (!contentId) {
      return;
    }
    const content = [...this.state.content];
    this.recursiveDelete(contentId, content);
    this.setState({ content, editingContent: null });
  };

  onDragEnd = ({ source, destination }) => {
    if (!(destination && destination.droppableId)) {
      return;
    }

    const content = this.findContentById(destination.droppableId);
    if (destination && content) {
      content.content = reorderContent(
        content.content,
        source.index,
        destination.index
      );
      this.setState({
        content: this.state.content, // mutates state directly
      });
    }
  };

  flattenDeep(
    content: $ContentBlocks,
    flattened: $ContentBlocks = []
  ): $ContentBlocks {
    return values(
      transform(
        content,
        (memo, child) => {
          if (child && child.id) {
            memo[child.id] = child;
            if (child.content && child.content.length) {
              memo = memo.concat(this.flattenDeep(child.content, memo));
            }
          }
        },
        flattened
      )
    );
  }

  recursiveDelete(id: string, content: $ContentBlocks): void {
    content.forEach((child, idx) => {
      if (child.id === id) {
        content.splice(idx, 1);
      } else if (child.content && child.content.length) {
        this.recursiveDelete(id, child.content);
      }
    });
  }

  findContentById(
    id: string,
    content: $ContentBlocks = this.state.content
  ): null | $ContentBlock {
    const allContent = this.flattenDeep(content);
    return find(allContent, {
      id,
    });
  }

  showSidebar = (
    e: null | Event,
    id: string,
    props?: { prev: Object, next: Object }
  ) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    if (this.state.editingContent) {
      if (this.state.editingContent.id === id) {
        return; // noop
      }
      if (
        props &&
        props.prev &&
        props.next &&
        JSON.stringify(props.prev) !== JSON.stringify(props.next)
      ) {
        return this.setState({ unsavedChanges: id });
      }
    }

    this.setState({
      editingContent: this.findContentById(id),
      unsavedChanges: null,
    });
  };

  updateComponentAttrs(id: null | string, attrs: Object): void {
    if (!id) {
      return;
    }
    const content = [...this.state.content];
    const component = this.findContentById(id, content);
    if (!component) {
      return;
    }
    component.attrs = attrs;

    this.setState(
      {
        editingContent: null,
        content,
      },
      () => this.handleUnsavedChanges()
    );
  }

  addChildToContent(id?: null | string, type: null | string): void {
    const content = [...this.state.content];
    const components = this.state.components;

    if (id && type) {
      const parentComponent = this.findContentById(id, content);
      if (!parentComponent) {
        return;
      }

      const newComponent: $Component = find(components, { type });
      if (!newComponent) {
        return;
      }
      if (
        newComponent.generateContent &&
        typeof newComponent.generateContent === "function"
      ) {
        parentComponent.content = parentComponent.content.concat(
          Editor.setDefaultProps(
            newComponent.generateContent(),
            this.state.components
          )
        );
      } else {
        parentComponent.content = parentComponent.content.concat(
          Editor.setDefaultProps(
            [{ type, content: [], attrs: {}, id: generateUUID() }],
            this.state.components
          )
        );
      }
    }

    this.setState({
      editingContent: null,
      toolboxModalId: null,
      content,
    });
  }

  render() {
    const { classes } = this.props;
    const { toolboxModalId, content, editingContent, components } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Formik
          enableReinitialize={true}
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={editingContent ? { ...editingContent.attrs } : {}}
          onSubmit={(values: Object) =>
            this.updateComponentAttrs(
              editingContent && editingContent.id,
              values
            )
          }
          render={(formProps: { values: Object }) => {
            const editingAttrs =
              editingContent && (Object.keys(editingContent.attrs) || []);
            const formValues =
              formProps && (Object.keys(formProps.values) || []);
            const internals = {
              isEditor: true, // an indicator to not show CSS related to editing content
              showSidebar: (e, id) =>
                this.showSidebar(e, id, {
                  prev:
                    editingContent && editingContent.attrs
                      ? editingContent.attrs
                      : {},
                  next: formProps.values,
                }),
              editingContentFormAttrs: formProps.values,
              editingContentId: editingContent && editingContent.id,
              addChildToContent: (id: string) => this.openToolboxModal(id),
              components,
              deleteContent: (id) => this.deleteContent(id),
            };
            return (
              <Form
                className={classNames(
                  classes.root,
                  editingContent && classes.editingContent
                )}
              >
                <div className={classes.preview}>
                  <RenderContent content={content} internals={internals} />
                </div>
                {editingContent &&
                formProps &&
                JSON.stringify(editingAttrs) === JSON.stringify(formValues) ? (
                  <div className={classes.sidebar}>
                    <SidebarForm
                      type={editingContent.type}
                      cancelEdit={this.cancelEdit}
                    >
                      {React.createElement(
                        find(components, { type: editingContent.type }).Form,
                        {}
                      )}
                    </SidebarForm>
                  </div>
                ) : null}
                <UnsavedChangesModal
                  id={toolboxModalId}
                  discardChanges={this.cancelEdit}
                  isOpen={this.state.unsavedChanges}
                  type={editingContent && editingContent.type}
                />
                <ToolboxModal
                  id={toolboxModalId}
                  components={components}
                  onSelect={(id: string, type: string) =>
                    this.addChildToContent(id, type)
                  }
                  internals={internals}
                />
              </Form>
            );
          }}
        />
      </DragDropContext>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    flex: "1",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  editingContent: {
    "& $preview": {
      paddingRight: "360px", // Scoots the preview over to ensure it doesn't render under the sidebar nav, not sure if I like this
    },
  },
  preview: {
    flex: "1",
    width: "100%",
    height: "auto",
    overflowX: "hidden",
    overflowY: "auto",
  },
  sidebar: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    flexShrink: "0",
    width: "360px",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    background: theme.colors.gray050,
    padding: "8px",
    zIndex: Constants.zIndex.sidebar,
    boxShadow: theme.globalBoxShadow,
  },
}))(Editor);

// Available to help with building components
export const Tools = {
  generateUUID,
  ToolboxItem,
  renderReact,
};
