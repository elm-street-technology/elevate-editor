import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import { DragDropContext } from "react-beautiful-dnd";
import Preview from "./Preview";
import Toolbox from "./Toolbox";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class Editor extends Component {
  state = {
    previewItems: [
      { id: "1", label: "Image Block" },
      { id: "2", label: "Text Block" },
      { id: "3", label: "Horizontal Line" },
    ],
  };

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const previewItems = reorder(
        this.state[source.droppableId],
        source.index,
        destination.index
      );

      let state = { previewItems };

      this.setState(state);
    } else {
      // Handle dropping from toolbox into preview
      // console.log(source, destionation);
      // console.log(this.state);
    }
  };

  render() {
    const { classes } = this.props;
    const { previewItems } = this.state;
    return (
      <div className={classes.root}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Preview className={classes.preview} previewItems={previewItems} />
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
