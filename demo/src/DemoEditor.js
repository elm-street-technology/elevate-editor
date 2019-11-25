import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/server";
import { Formik, FastField } from "formik";
import Editor, { Tools, EmailComponents } from "elevate-editor";
import withStyles from "elevate-ui/withStyles";
import Button from "elevate-ui/Button";
import Textarea from "elevate-ui/Textarea";
import Modal from "elevate-ui/Modal";
import Typography from "elevate-ui/Typography";

import SignatureBlock from "./Components/SignatureBlock";
import placeholders from "./placeholders";
import replacements from "./replacements";
import templates from "./templates";

type Props = {
  classes: Object,
  className: string,
};

type State = {
  step: "editor" | "preview",
  editorMode: "email" | "web",
  template: string,
  content: Object[],
  html: string,
  showJsonModel: boolean,
  showHtmlModel: boolean,
};

class EmailEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const template = props.match.params.template || "email";
    this.state = {
      step: "editor",
      template,
      html: "",
      showJsonModel: false,
      showHtmlModel: false,
      ...(templates[template] || {}),
    };
  }

  componentDidUpdate() {
    const template = this.props.match.params.template || "email";
    const currentTemplate = this.state.template;
    if (currentTemplate !== template && template) {
      this.setState({
        template,
        step: "editor",
        ...(templates[template] || {}),
      });
    }
  }

  exportHTML = async () => {
    const html = await this.editor.exportHTML({
      content: this.editor.exportJSON(),
      components: this.getComponents(),
      inlineCss: this.state.editorMode === "email",
    });
    this.setState({
      html,
      showHtmlModel: true,
    });
  };

  getComponents() {
    const { editorMode } = this.state;
    if (editorMode === "email") {
      return [...EmailComponents, SignatureBlock];
    }
    return [SignatureBlock];
  }

  toggleHtmlModel() {
    this.setState({
      showHtmlModel: !this.state.showHtmlModel,
    });
  }

  toggleJsonModel() {
    this.setState({
      content: this.editor.exportJSON(),
      showJsonModel: !this.state.showJsonModel,
    });
  }

  togglePreview() {
    const { step: lastStep, content: oldContent } = this.state;
    const step = lastStep === "editor" ? "preview" : "editor";
    if (
      lastStep === "editor" &&
      this.editor.hasUnsavedChanges(this.togglePreview.bind(this))
    ) {
      return;
    }
    const content =
      lastStep === "editor" ? this.editor.exportJSON() : oldContent;
    this.setState({
      step,
      content,
    });
  }

  renderPreview() {
    const { classes } = this.props;
    const { content } = this.state;
    const html = ReactDOM.renderToString(
      Tools.renderReact({
        content,
        components: this.getComponents(),
      })
    );

    return (
      <div
        className={classes.preview}
        dangerouslySetInnerHTML={{
          __html: Tools.stringReplace(html, replacements),
        }}
      />
    );
  }
  renderEditor() {
    const { classes } = this.props;
    const { content, template } = this.state;

    return (
      <div className={classes.preview}>
        <Editor
          key={template}
          components={this.getComponents()}
          content={content}
          placeholders={placeholders}
          replacements={replacements}
          UPLOADCARE_API_KEY="demopublickey"
          innerRef={(editor) => {
            this.editor = editor;
          }}
        />
      </div>
    );
  }

  renderImportExport() {
    const { classes } = this.props;
    const { showJsonModel, content } = this.state;
    return (
      <Fragment>
        <Formik
          initialValues={{ content: JSON.stringify(content) }}
          enableReinitialize={true}
          validate={(values) => {
            let errors = {};
            try {
              JSON.parse(values.content);
            } catch (e) {
              errors.content = "Could Not Parse Content";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.setState({
              step: "editor",
              content: JSON.parse(values.content),
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            submitForm,
            /* and other goodies */
          }) => (
            <Modal
              confirmAction={() => {
                submitForm();
                this.toggleJsonModel();
              }}
              title="Import/Export JSON"
              visible={showJsonModel}
              confirmText="Import"
              toggleModal={() => this.toggleJsonModel()}
            >
              <Typography type="body" style={{ minWidth: "400px" }}>
                <form onSubmit={handleSubmit} className={classes.root}>
                  <FastField
                    id="content"
                    name="content"
                    label="JSON Content"
                    component={Textarea}
                  />
                </form>
              </Typography>
            </Modal>
          )}
        </Formik>
      </Fragment>
    );
  }

  renderHtmlExport() {
    const { showHtmlModel, html } = this.state;
    return (
      <Fragment>
        <Modal
          confirmAction={() => this.toggleHtmlModel()}
          title="HTML"
          visible={showHtmlModel}
          confirmText="Close"
          cancelText=""
          toggleModal={() => this.toggleHtmlModel()}
        >
          <div>
            <textarea
              style={{ width: "400px", minHeight: "50vh" }}
              value={html}
              readOnly
            />
          </div>
        </Modal>
      </Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    const { step } = this.state;
    return (
      <Fragment>
        {step === "editor" && this.renderEditor()}
        {step === "preview" && this.renderPreview()}
        <div className={classes.flex}>
          <Button
            className={classes.button}
            onClick={this.togglePreview.bind(this)}
          >
            {step === "editor" ? "Preview" : "Editor"}
          </Button>
          {step === "editor" && (
            <Fragment>
              <Button className={classes.button} onClick={this.exportHTML}>
                Export to HTML
              </Button>
              <Button
                className={classes.button}
                onClick={() => this.toggleJsonModel()}
              >
                Import/Export JSON
              </Button>
            </Fragment>
          )}
        </div>
        {this.renderHtmlExport()}
        {this.renderImportExport()}
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
  codeView: {
    width: "400px",
    overflow: "auto",
  },
  preview: {
    width: "100%",
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
