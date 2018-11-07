// @flow
import React, { Component } from "react";
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

import RenderComponent from "./Internals/RenderComponent";
import GenerateMarkup from "./Internals/GenerateMarkup";
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
  classes: {
    root: Object,
    preview: Object,
    sidebar: Object,
  },
  components?: $Components,
  content: $ContentBlocks,
};
type State = {
  content: $ContentBlocks,
  editingContent: null | $ContentBlock,
  components: $Components,
  toolboxModalId: null | string,
  unsavedChanges: null | string, // id of component to edit after saving or discarding changes
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

function renderToStaticMarkup(
  content: $ContentBlocks = [],
  components: $Components = []
) {
  return ReactDOMServer.renderToStaticMarkup(
    <ThemeProvider>
      <GenerateMarkup
        content={content}
        internals={{
          isEditor: false, // an indicator to not show CSS related to editing content
          components: combineComponents(components),
          addChildToContent: () => {},
          handleContentClick: (e, id) => {
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
      content: this.setDefaultProps(
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
        content: this.setDefaultProps(
          this.props.content,
          this.state.components
        ),
      });
    }
  }

  setDefaultProps(
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
        // debugger;
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
            ? this.setDefaultProps(child.content, components)
            : this.setDefaultProps(
                component && component.defaultContent
                  ? component.defaultContent(child)
                  : [],
                components
              ),
      };
    });
  }

  exportHTML = (
    content: $ContentBlocks = this.state.content,
    components: $Components = this.state.components
  ) => {
    return renderToStaticMarkup(content, components);
  };

  exportJSON = () => {
    return this.state.content;
  };

  cancelEdit = () => {
    const componentId = this.state.unsavedChanges;

    this.setState(
      {
        editingContent: null,
        toolboxModalId: null,
        unsavedChanges: null,
      },
      () => {
        if (componentId) {
          this.handleContentClick(null, componentId);
        }
      }
    );
  };

  openToolboxModal = (toolboxModalId: string) => {
    this.setState({ toolboxModalId }, () => noScroll.on());
  };

  deleteContent = (contentId) => {
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

  handleContentClick = (
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

    const componentId = this.state.unsavedChanges;

    this.setState(
      {
        unsavedChanges: null,
        editingContent: null,
        content,
      },
      () => {
        if (componentId) {
          this.handleContentClick(null, componentId);
        }
      }
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
          this.setDefaultProps(
            newComponent.generateContent(),
            this.state.components
          )
        );
      } else {
        parentComponent.content = parentComponent.content.concat(
          this.setDefaultProps(
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
            return (
              <Form className={classes.root}>
                <div className={classes.preview}>
                  {content.map((component, idx) => (
                    <RenderComponent
                      key={idx}
                      component={component}
                      internals={{
                        isEditor: true, // an indicator to not show CSS related to editing content
                        handleContentClick: (e, id) =>
                          this.handleContentClick(e, id, {
                            prev:
                              editingContent && editingContent.attrs
                                ? editingContent.attrs
                                : {},
                            next: formProps.values,
                          }),
                        editingContentFormAttrs: formProps.values,
                        editingContentId: editingContent && editingContent.id,
                        addChildToContent: (id: string) =>
                          this.openToolboxModal(id),
                        components,
                      }}
                    />
                  ))}
                </div>
                {editingContent &&
                formProps &&
                JSON.stringify(editingAttrs) === JSON.stringify(formValues) ? (
                  <div className={classes.sidebar}>
                    <SidebarForm
                      type={editingContent.type}
                      cancelEdit={this.cancelEdit}
                      deleteContent={() =>
                        this.deleteContent(editingContent.id)
                      }
                      disableDelete={editingContent.attrs.disableDelete}
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
              </Form>
            );
          }}
        />
        <ToolboxModal
          id={toolboxModalId}
          components={components}
          onSelect={(id: string, type: string) =>
            this.addChildToContent(id, type)
          }
        />
      </DragDropContext>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  preview: {
    width: "100%",
    height: "calc(100vh - 16px)",
    overflowX: "hidden",
    overflowY: "scroll",
    paddingBottom: "32px",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    padding: "8px",

    flexShrink: "0",
    width: "360px",
    height: "calc(100vh - 16px)",
    overflowX: "hidden",
    overflowY: "scroll",
    background: "#F5F5F5",
    borderLeft: "1px solid #E0E0E0",
  },
}))(Editor);

// Available to help with building components
export const Tools = {
  RenderComponent,
  generateUUID,
  ToolboxItem,
  renderToStaticMarkup,
};
