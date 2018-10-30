// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { DragDropContext } from "react-beautiful-dnd";
import find from "lodash/find";
import values from "lodash/values";
import transform from "lodash/transform";
import map from "lodash/map";

import generateUUID from "../utils/generate-uuid";
import PreviewChanges from "./PreviewChanges";
import PreviewForMarkup from "./PreviewForMarkup";
import Toolbox from "../Toolbox";
import ThemeProvider from "elevate-ui/ThemeProvider";

import ReactDOMServer from "react-dom/server";

import type { $Components } from "../../types";

type Props = {
  classes: Object,
  components: $Components,
};
type State = {
  content: $Components,
  editingComponent: null,
};

// a little function to help us with reordering the result
function reorderContent(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

// function to fill dummy attrs based on component
function populateAttrs(draggableId) {
  const attrs = {};
  switch (draggableId) {
    case "Image":
      attrs.src = "https://picsum.photos/600/260/?random";
      attrs.width = 600;
      attrs.height = 260;
      break;
    case "Button":
      attrs.children = "Click To Edit";
      attrs.color = "#f15953";
      attrs.textColor = "#ffffff";
      attrs.url = "http://google.com";
      attrs.fontSize = 14;
      attrs.buttonPaddingTop = 0;
      attrs.buttonPaddingRight = 0;
      attrs.buttonPaddingBottom = 0;
      attrs.buttonPaddingLeft = 0;
      break;
    case "Row":
      attrs.alignment = "left";
      attrs.backgroundColor = "#ffffff";
      attrs.paddingTop = 0;
      attrs.paddingRight = 0;
      attrs.paddingBottom = 0;
      attrs.paddingLeft = 0;
      attrs.width = "600px";
      attrs.borderSize = 0;
      attrs.borderColor = "#000000";
      attrs.backgroundImage = "";
      attrs.backgroundSize = "";
      break;
    case "HorizontalRule":
      attrs.thickness = 2;
      attrs.color = "#666666";
      break;
    case "Text":
      attrs.value = {
        blocks: [
          {
            key: "2rols",
            text: "This is a text block. Click here to edit.",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
        entityMap: {},
      };
      break;
    default:
      break;
  }
  return attrs;
}

// function to fill dummy content
function populateContent(draggableId) {
  const content = [];
  // if (draggableId === "Row") {
  //   content.push(
  //     {
  //       id: generateUUID(),
  //       type: "Image",
  //       attrs: {
  //         src: "https://picsum.photos/200/200/?random",
  //         width: 200,
  //         height: 200,
  //         alt: "Hello World",
  //         title: "Hello World",
  //       },
  //     },
  //     {
  //       id: generateUUID(),
  //       type: "Text",
  //       attrs: {
  //         value: {
  //           blocks: [
  //             {
  //               key: "2rols",
  //               text:
  //                 "Elevate is the only fully integrated single system on the market today that does everything real estate professionals need — from generating new leads to creating clients for life!",
  //               type: "unstyled",
  //               depth: 0,
  //               inlineStyleRanges: [],
  //               entityRanges: [],
  //               data: {},
  //             },
  //           ],
  //           entityMap: {},
  //         },
  //       },
  //     }
  //   );
  // }
  return content;
}

// a little function to help us with reordering the result
function addContent(list, startIndex, draggableId) {
  const result = Array.from(list);

  result.splice(startIndex, 0, {
    id: generateUUID(),
    type: draggableId,
    attrs: populateAttrs(draggableId),
    content: populateContent(draggableId),
  });

  return result;
}

class Editor extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    let content = [
      {
        id: generateUUID(),
        type: "Image",
        attrs: {
          src: "https://tryelevate.com/images/logo.png",
          width: 399,
          height: 126,
          alt: "Try Elevate",
          title: "Try Elevate",
          upload: "",
          alignment: "center",
        },
      },
      {
        id: generateUUID(),
        type: "HorizontalRule",
        attrs: {
          thickness: 2,
          color: "#666666",
        },
      },
      {
        id: generateUUID(),
        type: "Text",
        attrs: {
          value: {
            blocks: [
              {
                key: "2rols",
                text:
                  "Elevate is the only fully integrated single system on the market today that does everything real estate professionals need — from generating new leads to creating clients for life!",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          },
        },
      },
      {
        id: generateUUID(),
        type: "HorizontalRule",
        attrs: {
          thickness: 2,
          color: "#666666",
        },
      },
      {
        id: generateUUID(),
        type: "Image",
        attrs: {
          src: "https://picsum.photos/600/400/?random",
          width: 600,
          height: 400,
          alt: "Elevate is the best!",
          title: "Elevate is the best!",
          upload: "",
          alignment: "center",
        },
      },
      {
        id: generateUUID(),
        type: "Text",
        attrs: {
          value: {
            blocks: [
              {
                key: "2rols",
                text:
                  "Did we mention Elevate's fully integrated, beautifully designed, mobile responsive websites embedded with best-in-class lead capture technology?",
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              },
            ],
            entityMap: {},
          },
        },
      },
      {
        id: generateUUID(),
        type: "Row",
        attrs: {},
        content: [
          {
            id: generateUUID(),
            type: "Image",
            attrs: {
              src: "https://picsum.photos/200x200",
              width: 200,
              height: 200,
              alt: "Hello World",
              title: "Hello World",
            },
          },
          {
            id: generateUUID(),
            type: "Text",
            attrs: {
              value: {
                blocks: [
                  {
                    key: "2rols",
                    text:
                      "Provide your clients and prospects with MLS listing search, and provide yourself with full insight and tools to sell faster and create clients for life!",
                    type: "unstyled",
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {},
                  },
                ],
                entityMap: {},
              },
            },
          },
        ],
      },
      {
        id: generateUUID(),
        type: "HorizontalRule",
        attrs: {
          thickness: 2,
          color: "#666666",
        },
      },
      {
        id: generateUUID(),
        type: "Button",
        attrs: {
          children: "Try Elevate Today",
          url: "https://tryelevate.com",
          alignment: "center",
        },
      },
    ];

    if (props.components) {
      content = map(props.components, (component) => {
        return {
          id: generateUUID(),
          type: component.type,
          attrs: component.attrs || populateAttrs(component.type),
          content: component.content || populateContent(component.type),
        };
      });
    }

    this.state = {
      editingComponent: null,
      content,
    };
  }

  getHTMLContent = () => {
    return ReactDOMServer.renderToStaticMarkup(
      <ThemeProvider>
        <PreviewForMarkup content={this.state.content} />
      </ThemeProvider>
    );
  };

  cancelEdit = () => {
    this.setState({
      editingComponent: null,
    });
  };

  deleteContent = (componentID) => {
    const components = this.state.content;
    const updatedComponents = components.filter(
      (component) => component.id !== componentID
    );

    this.setState({ content: updatedComponents }, () =>
      this.setState({ editingComponent: null })
    );
  };

  onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const component = this.findComponentById(destination.droppableId);
    const draggableIdIsUUID = draggableId.length === 36;

    // Dropping into itself should reorder the items
    if (component) {
      component.content = reorderContent(
        component.content,
        source.index,
        destination.index
      );
      this.setState({
        content: this.state.content,
      }); // mutates state directly, @todo refactor
    } else if (source.droppableId === destination.droppableId) {
      // Root page re-order
      const content = reorderContent(
        this.state.content,
        source.index,
        destination.index
      );

      this.setState({
        content,
      });
    } else {
      if (draggableIdIsUUID) {
        console.log("Noop: Functionality not yet supported");
        return; // invariant error, trying to addContent content, but content already exists and was just dragged outside draggable area
      }

      // Handle dropping from toolbox into preview
      console.log(source, destination, draggableId);
      const content = addContent(
        this.state.content,
        destination.index,
        draggableId
      );
      this.setState({
        content,
      });
    }
  };

  flattenDeep(
    components: $Components,
    flattened: $Components = []
  ): $Components {
    return values(
      transform(
        components,
        (memo, component) => {
          memo[component.id] = component;

          if (component.content && component.content.length) {
            memo = memo.concat(this.flattenDeep(component.content, memo));
          }
        },
        flattened
      )
    );
  }

  findComponentById(id: string) {
    const allContent = this.flattenDeep(this.state.content);
    return find(allContent, {
      id,
    });
  }

  handleComponentClick(e: Event, id: string) {
    e.stopPropagation();

    this.setState({
      editingComponent: this.findComponentById(id),
    });
  }

  handleUpdateContent(id: string, attrs: Object) {
    const component = this.findComponentById(id);
    component.attrs = attrs; // mutates this.state.content directly, not ideal
    this.setState({
      editingComponent: null,
      content: this.state.content,
    });
  }

  render() {
    const { classes } = this.props;
    const { content } = this.state;
    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className={classes.preview}>
            <PreviewChanges
              content={content}
              handleComponentClick={this.handleComponentClick.bind(this)}
            />
          </div>
          <Toolbox
            onSave={(id, attrs) => this.handleUpdateContent(id, attrs)}
            cancelEdit={this.cancelEdit}
            deleteContent={this.deleteContent}
            className={classes.toolbox}
            editingComponent={this.state.editingComponent}
          />
        </DragDropContext>
      </div>
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
    height: "calc(100vh - 16px)", // todo: 100% height
    overflowX: "hidden",
    overflowY: "scroll",
  },
  toolbox: {
    width: "360px",
    height: "calc(100vh - 16px)", // todo: 100% height
  },
}))(Editor);
