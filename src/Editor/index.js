// @flow
import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { DragDropContext } from "react-beautiful-dnd";
import Preview from "./Preview";
import Toolbox from "../Toolbox";

import type { $Components } from "../../types";

type Props = {
  classes: Object,
};
type State = { content: $Components };

// a little function to help us with reordering the result
function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

class Editor extends Component<Props, State> {
  state = {
    content: [
      {
        type: "Image",
        attrs: {
          width: 200,
          height: 200,
          alt: "Hello World",
          title: "Hello World",
        },
      },
      { type: "Text", attrs: { value: "Hello World" } },
      { type: "HorizontalRule", attrs: {} },
      {
        type: "Row",
        attrs: {},
        content: [
          {
            id: "1",
            type: "Image",
            attrs: {
              width: 200,
              height: 200,
              alt: "Hello World",
              title: "Hello World",
            },
          },
          { id: "2", type: "Text", attrs: { value: "Hello World" } },
        ],
      },
      {
        type: "Video",
        attrs: {
          mp4:
            "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4",
          autoplay: true,
          width: 200,
          height: 200,
        },
      },
      {
        type: "Button",
        attrs: {
          label: "Hello Button",
        },
      },
      {
        type: "Table",
        attrs: {
          columns: [
            {
              Header: "Name",
              accessor: "name",
              minWidth: 120,
            },
            {
              Header: "Phone",
              accessor: "phone",
              minWidth: 120,
            },
          ],
          data: [
            { name: "Jason Walsh", phone: "(111) 222-3333" },
            { name: "Chris Heninger", phone: "(111) 222-3333" },
          ],
        },
      },
      {
        type: "Icon",
        attrs: {
          size: 24,
          name: "AlarmOn",
          color: "red",
        },
      },
    ],
  };

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // Dropping into itself should reorder the items
    if (source.droppableId === destination.droppableId) {
      const content = reorder(
        this.state[source.droppableId],
        source.index,
        destination.index
      );

      let state = { content };

      this.setState(state);
    } else {
      // Handle dropping from toolbox into preview
      console.log(source, destination);
      console.log(this.state);
    }
  };

  render() {
    const { classes } = this.props;
    const { content } = this.state;
    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Preview className={classes.preview} content={content} />
          <Toolbox className={classes.toolbox} />
        </DragDropContext>
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignpreview: "stretch",
    width: "100vw",
    height: "100vh",
  },
  preview: {
    width: "100%",
    background: "rgba(0,0,0,0.2)",
  },
  toolbox: {
    width: "300px",
    background: "rgba(0,0,0,0.3)",
  },
}))(Editor);
