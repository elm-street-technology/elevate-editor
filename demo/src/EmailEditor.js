import React, { Component, Fragment } from "react";
import classNames from "classnames";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Button from "elevate-ui/Button";
import Editor from "elevate-editor";

import SignatureBlock from "./Components/SignatureBlock";

type Props = {
  classes: Object,
  className: string,
};

class EmailEditor extends Component<Props> {
  exportHTML = () => {
    console.log(this.editor.exportHTML());
  };
  exportJSON = () => {
    console.log(this.editor.exportJSON());
  };

  render() {
    const { classes, className } = this.props;
    return (
      <Fragment>
        <Paper
          withPadding={false}
          className={classNames(classes.root, className)}
        >
          <Editor
            components={[SignatureBlock]}
            content={[
              {
                type: "Row",
                attrs: {
                  disableDelete: true,
                  height: "calc(100vh - 30px)",
                },
                content: [
                  {
                    type: "Row",
                    attrs: {
                      direction: "horizontal",
                      disableDelete: true,
                    },
                    content: [
                      {
                        type: "Row",
                        attrs: {},
                        content: [
                          {
                            type: "Image",
                            attrs: {
                              height: "",
                              width: "",
                              src: "https://picsum.photos/500/500/?random",
                              alt: "",
                              title: "",
                            },
                          },
                        ],
                      },
                      {
                        type: "Row",
                        attrs: {},
                        content: [
                          {
                            type: "Text",
                            attrs: {
                              value: {
                                blocks: [
                                  {
                                    key: "2rols",
                                    text:
                                      "This is a text block. Click here to edit.",
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
                            type: "Image",
                            attrs: {
                              height: "",
                              width: "",
                              src: "https://picsum.photos/400/400/?random",
                            },
                          },
                          {
                            type: "Row",
                            attrs: {
                              paddingTop: 16,
                              paddingRight: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                            },
                            content: [
                              {
                                type: "Text",
                                attrs: {
                                  value: {
                                    blocks: [
                                      {
                                        key: "2rols",
                                        text:
                                          "This is a text block. Click here to edit.",
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
                        ],
                      },
                    ],
                  },
                ],
              },
            ]}
            innerRef={(editor) => {
              this.editor = editor;
            }}
          />
        </Paper>
        <div className={classes.flex}>
          <Button className={classes.button} onClick={this.exportHTML}>
            Export to HTML (console.log)
          </Button>
          <Button className={classes.button} onClick={this.exportJSON}>
            Export to JSON (console.log)
          </Button>
        </div>
      </Fragment>
    );
  }
}

const styles = (theme) => ({
  root: {
    position: "relative",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden", // round corners
  },
  flex: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    margin: "8px",
  },
});

export default withStyles(styles)(EmailEditor);
