// @flow
import React from "react";
import withStyles from "elevate-ui/withStyles";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  classes: Object,
  internals: $Internals,
};

const ScriptRender = ({
  classes,
  content: {
    attrs,
    attrs: { url },
  },
  internals: { isEditor },
}: $Props) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <title></title>
    <script type="text/javascript" src="${url}"></script>
    </head>
    <body>
    </body>
  </html>
  `;
  const isVideo = url !== undefined ? url.includes("embed") : false;
  return (
    <div
      style={{
        overflow: "hidden",
        paddingBottom:
          url === "" || url === undefined ? "10%" : isVideo ? "56.25%" : "125%",
        height: 0,
      }}
    >
      {url === "" || url === undefined ? (
        "<Insert script here />"
      ) : isVideo ? (
        <iframe
          title={"Embed Editor"}
          src={url}
          style={{
            left: "5%",
            top: 0,
            position: "absolute",
          }}
          width="90%"
          onClick={(e) => {
            if (isEditor) {
              e.preventDefault();
            }
          }}
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          scrolling="no"
          allowFullScreen
        />
      ) : (
        <iframe
          title={"Embed Editor"}
          srcDoc={html}
          style={{
            left: "5%",
            top: 0,
            position: "absolute",
          }}
          width="90%"
          onClick={(e) => {
            if (isEditor) {
              e.preventDefault();
            }
          }}
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      )}
    </div>
  );
};

const styles = (theme) => ({
  container: {
    overflow: "hidden",
    paddingBottom: "80%",
    position: "relative",
    height: 0,
  },
  frame: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

export default withStyles(styles)(ScriptRender);
