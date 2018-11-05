// @flow

import Preview from "./Preview";
import { Tools } from "elevate-editor";

export default {
  Preview,
  type: "SignatureBlock",
  generateContent() {
    return [
      {
        id: Tools.generateUUID(),
        type: "Row",
        attrs: {
          height: "150px",
          direction: "horizontal",
        },
        content: [
          {
            id: Tools.generateUUID(),
            type: "Row",
            attrs: {
              height: "",
              paddingTop: 4,
              paddingRight: 16,
              paddingBottom: 4,
              paddingLeft: 4,
            },
            content: [
              {
                id: Tools.generateUUID(),
                type: "Image",
                attrs: {
                  height: "",
                  width: "",
                  src: "https://picsum.photos/150/150/?random",
                },
              },
            ],
          },
          {
            id: Tools.generateUUID(),
            type: "Row",
            attrs: {
              paddingTop: 4,
              paddingRight: 4,
              paddingBottom: 4,
              paddingLeft: 4,
            },
            content: [
              {
                id: Tools.generateUUID(),
                type: "Row",
                attrs: {
                  direction: "vertical",
                },
                content: [
                  {
                    id: Tools.generateUUID(),
                    type: "Text",
                    attrs: {
                      value: {
                        blocks: [
                          {
                            key: "2rols",
                            text: "Your Name Here",
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
                    id: Tools.generateUUID(),
                    type: "Text",
                    attrs: {
                      value: {
                        blocks: [
                          {
                            key: "2rols",
                            text: "Your Office Address",
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
    ];
  },
};
