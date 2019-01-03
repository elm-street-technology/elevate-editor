import React, { Component } from "react";
// import draftToHtml from "draftjs-to-html";
import Typography from "elevate-ui/Typography";
import RenderContent from "../../Internals/RenderContent";
import { Tools } from "../..";
import withStyles from "elevate-ui/withStyles";
// import classNames from "classnames";
import WYSIWYGFormatting from "../Common/TextEditor/WYSIWYGFormatting";

import type { $ContentBlock, $Internals } from "types";
type $Props = {
  content: $ContentBlock,
  classes: Object,
  internals: $Internals,
};

class HTMLPreview extends Component<$Props> {
  renderChildren() {
    const {
      content: { content },
      internals,
    } = this.props;

    return content.map((child, idx) => {
      if (!child) {
        return null;
      }

      const renderedChild = (
        <RenderContent key={idx} internals={internals} content={[child]} />
      );
      return renderedChild;
    });
  }

  render() {
    const {
      content: { attrs, content },
      internals,
    } = this.props;
    console.log(attrs);
    switch (attrs.tag) {
      case "br":
        return <div style={{ marginTop: "4px" }}>&nbsp;</div>;
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return (
          <Typography
            type={`heading${attrs.tag.indexOf(1)}`}
            key={internals.key}
          >
            {attrs.children}
          </Typography>
        );
      case "a":
        return (
          <a
            key={internals.key}
            href={attrs.href}
            target={attrs.target}
            rel={attrs.rel}
            style={attrs.style}
          >
            {content && content.length ? this.renderChildren() : null}
            {attrs.children ? attrs.children : null}
          </a>
        );
      case "img":
        return (
          <img
            key={internals.key}
            src={attrs.src}
            style={attrs.style}
            alt={attrs.alt}
            title={attrs.alt}
          />
        );
      case "span":
        if (
          !(
            (content && content.length) ||
            (attrs.children && attrs.children.length)
          )
        ) {
          return null;
        }
        return (
          <span style={attrs.style} key={internals.key}>
            {content && content.length ? this.renderChildren() : null}
            {attrs.children ? attrs.children : null}
          </span>
        );
      case "ul":
        return (
          <ul style={attrs.style} key={internals.key}>
            {content && content.length ? this.renderChildren() : null}: null}
          </ul>
        );
      case "ol":
        return (
          <ol style={attrs.style} key={internals.key}>
            {content && content.length ? this.renderChildren() : null}: null}
          </ol>
        );
      case "li":
        return (
          <li style={attrs.style} key={internals.key}>
            {content && content.length ? this.renderChildren() : null}
            {attrs.children ? attrs.children : null}
          </li>
        );
      case "em":
        return <em style={attrs.style}>{attrs.children}</em>;
      case "b":
      case "strong":
        return <strong style={attrs.style}>{attrs.children}</strong>;
      case "div":
        return (
          <div style={attrs.style} key={internals.key}>
            {content && content.length ? this.renderChildren() : null}
            {attrs.children ? attrs.children : null}
          </div>
        );
      default:
        // @todo check if attrs.type matches a known component and render that instead, better for editing later

        return React.createElement(attrs.tag || "span", attrs);
    }
    //https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-jsx-and-react
    // return (
    //   <div className={classNames(classes.root, classes[attrs.alignment])}>
    //     {attrs.children}
    //   </div>
    // );
  }
}

const styles = (theme) => ({
  root: {
    color: ({ content: { attrs } }) => attrs && attrs.color,
    width: "100%",
    lineHeight: "1.3rem",
    textAlign: "left",
    ...WYSIWYGFormatting,
    "& > *": {
      color: "inherit !important",
    },
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export default withStyles(styles, { name: "HTMLPreview" })(HTMLPreview);
