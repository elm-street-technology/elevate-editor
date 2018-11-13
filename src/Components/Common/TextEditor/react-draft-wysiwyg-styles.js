export default {
  "@global": {
    ".rdw-option-wrapper": {
      border: "1px solid #F1F1F1",
      padding: 5,
      minWidth: 25,
      height: 20,
      borderRadius: 2,
      margin: "0 4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      background: "white",
      textTransform: "capitalize",
    },
    ".rdw-option-wrapper:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
    },
    ".rdw-option-wrapper:active": {
      backgroundColor: "#ccc",
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-option-active": {
      backgroundColor: "#ccc",
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-option-disabled": {
      opacity: "0.3",
      cursor: "default",
    },
    ".rdw-dropdown-wrapper": {
      height: 30,
      background: "white",
      cursor: "pointer",
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      margin: "0 3px",
      textTransform: "capitalize",
      fallbacks: [
        {
          background: "white",
        },
      ],
    },
    ".rdw-dropdown-wrapper:focus": {
      outline: "none",
    },
    ".rdw-dropdown-wrapper:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
      backgroundColor: "#FFFFFF",
    },
    ".rdw-dropdown-wrapper:active": {
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-dropdown-carettoopen": {
      height: 0,
      width: 0,
      position: "absolute",
      top: "35%",
      right: "10%",
      borderTop: "6px solid black",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
    },
    ".rdw-dropdown-carettoclose": {
      height: 0,
      width: 0,
      position: "absolute",
      top: "35%",
      right: "10%",
      borderBottom: "6px solid black",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
    },
    ".rdw-dropdown-selectedtext": {
      display: "flex",
      position: "relative",
      height: "100%",
      alignItems: "center",
      padding: "0 5px",
    },
    ".rdw-dropdown-optionwrapper": {
      zIndex: "100",
      position: "relative",
      border: "1px solid #F1F1F1",
      width: "98%",
      background: "white",
      borderRadius: 2,
      margin: "0",
      padding: "0",
      maxHeight: 250,
      overflowY: "scroll",
    },
    ".rdw-dropdown-optionwrapper:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
      backgroundColor: "#FFFFFF",
    },
    ".rdw-dropdownoption-default": {
      minHeight: 25,
      display: "flex",
      alignItems: "center",
      padding: "0 5px",
    },
    ".rdw-dropdownoption-highlighted": {
      background: "#F1F1F1",
    },
    ".rdw-dropdownoption-active": {
      background: "#f5f5f5",
    },
    ".rdw-dropdownoption-disabled": {
      opacity: "0.3",
      cursor: "default",
    },
    ".rdw-inline-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-inline-dropdown": {
      width: 50,
    },
    ".rdw-inline-dropdownoption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-block-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-block-dropdown": {
      width: 110,
    },
    ".rdw-fontsize-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-fontsize-dropdown": {
      minWidth: 40,
    },
    ".rdw-fontsize-option": {
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-fontfamily-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-fontfamily-dropdown": {
      width: 115,
    },
    ".rdw-fontfamily-placeholder": {
      whiteSpace: "nowrap",
      maxWidth: 90,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".rdw-fontfamily-optionwrapper": {
      width: 140,
    },
    ".rdw-list-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-list-dropdown": {
      width: 50,
      zIndex: "90",
    },
    ".rdw-list-dropdownOption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-text-align-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-text-align-dropdown": {
      width: 50,
      zIndex: "90",
    },
    ".rdw-text-align-dropdownOption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-right-aligned-block": {
      textAlign: "right",
    },
    ".rdw-left-aligned-block": {
      textAlign: "left !important",
    },
    ".rdw-center-aligned-block": {
      textAlign: "center !important",
    },
    ".rdw-justify-aligned-block": {
      textAlign: "justify !important",
    },
    ".rdw-right-aligned-block > div": {
      display: "inline-block",
    },
    ".rdw-left-aligned-block > div": {
      display: "inline-block",
    },
    ".rdw-center-aligned-block > div": {
      display: "inline-block",
    },
    ".rdw-justify-aligned-block > div": {
      display: "inline-block",
    },
    ".rdw-colorpicker-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-colorpicker-modal": {
      position: "absolute",
      top: 35,
      left: 5,
      display: "flex",
      flexDirection: "column",
      width: 175,
      height: 175,
      border: "1px solid #F1F1F1",
      padding: 15,
      borderRadius: 2,
      zIndex: "100",
      background: "white",
      boxShadow: "3px 3px 5px #BFBDBD",
    },
    ".rdw-colorpicker-modal-header": {
      display: "flex",
      paddingBottom: 5,
    },
    ".rdw-colorpicker-modal-style-label": {
      fontSize: 15,
      width: "50%",
      textAlign: "center",
      cursor: "pointer",
      padding: "0 10px 5px",
    },
    ".rdw-colorpicker-modal-style-label-active": {
      borderBottom: "2px solid #0a66b7",
    },
    ".rdw-colorpicker-modal-options": {
      margin: "5px auto",
      display: "flex",
      width: "100%",
      height: "100%",
      flexWrap: "wrap",
      overflow: "scroll",
    },
    ".rdw-colorpicker-cube": {
      width: 22,
      height: 22,
      border: "1px solid #F1F1F1",
    },
    ".rdw-colorpicker-option": {
      margin: 3,
      padding: "0",
      minHeight: 20,
      border: "none",
      width: 22,
      height: 22,
      minWidth: 22,
      boxShadow: "1px 2px 1px #BFBDBD inset",
    },
    ".rdw-colorpicker-option:hover": {
      boxShadow: "1px 2px 1px #BFBDBD",
    },
    ".rdw-colorpicker-option:active": {
      boxShadow: "-1px -2px 1px #BFBDBD",
    },
    ".rdw-colorpicker-option-active": {
      boxShadow: "0px 0px 2px 2px #BFBDBD",
    },
    ".rdw-link-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-link-dropdown": {
      width: 50,
    },
    ".rdw-link-dropdownOption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-link-dropdownPlaceholder": {
      marginLeft: 8,
    },
    ".rdw-link-modal": {
      position: "absolute",
      top: 35,
      left: 5,
      display: "flex",
      flexDirection: "column",
      width: 235,
      height: 205,
      border: "1px solid #F1F1F1",
      padding: 15,
      borderRadius: 2,
      zIndex: "100",
      background: "white",
      boxShadow: "3px 3px 5px #BFBDBD",
    },
    ".rdw-link-modal-label": {
      fontSize: 15,
    },
    ".rdw-link-modal-input": {
      marginTop: 5,
      borderRadius: 2,
      border: "1px solid #F1F1F1",
      height: 25,
      marginBottom: 15,
      padding: "0 5px",
    },
    ".rdw-link-modal-input:focus": {
      outline: "none",
    },
    ".rdw-link-modal-buttonsection": {
      margin: "0 auto",
    },
    ".rdw-link-modal-target-option": {
      marginBottom: 20,
    },
    ".rdw-link-modal-target-option > span": {
      marginLeft: 5,
    },
    ".rdw-link-modal-btn": {
      marginLeft: 10,
      width: 75,
      height: 30,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      cursor: "pointer",
      background: "white",
      textTransform: "capitalize",
    },
    ".rdw-link-modal-btn:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
    },
    ".rdw-link-modal-btn:active": {
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-link-modal-btn:focus": {
      outline: "none !important",
    },
    ".rdw-link-modal-btn:disabled": {
      background: "#ece9e9",
    },
    ".rdw-link-dropdownoption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-history-dropdown": {
      width: 50,
      fallbacks: [
        {
          width: 50,
        },
      ],
    },
    ".rdw-embedded-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-embedded-modal": {
      position: "absolute",
      top: 35,
      left: 5,
      display: "flex",
      flexDirection: "column",
      width: 235,
      height: 180,
      border: "1px solid #F1F1F1",
      padding: 15,
      borderRadius: 2,
      zIndex: "100",
      background: "white",
      justifyContent: "space-between",
      boxShadow: "3px 3px 5px #BFBDBD",
    },
    ".rdw-embedded-modal-header": {
      fontSize: 15,
      display: "flex",
    },
    ".rdw-embedded-modal-header-option": {
      width: "50%",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    ".rdw-embedded-modal-header-label": {
      width: 95,
      border: "1px solid #f1f1f1",
      marginTop: 5,
      background: "#6EB8D4",
      borderBottom: "2px solid #0a66b7",
    },
    ".rdw-embedded-modal-link-section": {
      display: "flex",
      flexDirection: "column",
    },
    ".rdw-embedded-modal-link-input": {
      width: "88%",
      height: 35,
      margin: "10px 0",
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      fontSize: 15,
      padding: "0 5px",
    },
    ".rdw-embedded-modal-link-input-wrapper": {
      display: "flex",
      alignItems: "center",
    },
    ".rdw-embedded-modal-link-input:focus": {
      outline: "none",
    },
    ".rdw-embedded-modal-btn-section": {
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-embedded-modal-btn": {
      margin: "0 3px",
      width: 75,
      height: 30,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      cursor: "pointer",
      background: "white",
      textTransform: "capitalize",
    },
    ".rdw-embedded-modal-btn:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
    },
    ".rdw-embedded-modal-btn:active": {
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-embedded-modal-btn:focus": {
      outline: "none !important",
    },
    ".rdw-embedded-modal-btn:disabled": {
      background: "#ece9e9",
    },
    ".rdw-embedded-modal-size": {
      alignItems: "center",
      display: "flex",
      margin: "8px 0",
      justifyContent: "space-between",
    },
    ".rdw-embedded-modal-size-input": {
      width: "80%",
      height: 20,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      fontSize: 12,
    },
    ".rdw-embedded-modal-size-input:focus": {
      outline: "none",
    },
    ".rdw-emoji-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-emoji-modal": {
      overflow: "auto",
      position: "absolute",
      top: 35,
      left: 5,
      display: "flex",
      flexWrap: "wrap",
      width: 235,
      height: 180,
      border: "1px solid #F1F1F1",
      padding: 15,
      borderRadius: 2,
      zIndex: "100",
      background: "white",
      boxShadow: "3px 3px 5px #BFBDBD",
    },
    ".rdw-emoji-icon": {
      margin: 2.5,
      height: 24,
      width: 24,
      cursor: "pointer",
      fontSize: 22,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".rdw-spinner": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    ".rdw-spinner > div": {
      width: 12,
      height: 12,
      backgroundColor: "#333",
      borderRadius: "100%",
      display: "inline-block",
      W: "sk-bouncedelay 1.4s infinite ease-in-out both",
      animation: "sk-bouncedelay 1.4s infinite ease-in-out both",
    },
    ".rdw-spinner .rdw-bounce1": {
      W: "-0.32s",
      animationDelay: "-0.32s",
    },
    ".rdw-spinner .rdw-bounce2": {
      W: "-0.16s",
      animationDelay: "-0.16s",
    },
    "@keyframes sk-bouncedelay": {
      "0%, 80%, 100%": {
        W: "scale(0)",
        transform: "scale(0)",
      },
      "40%": {
        W: "scale(1.0)",
        transform: "scale(1.0)",
      },
    },
    ".rdw-image-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-image-modal": {
      position: "absolute",
      top: 35,
      left: 5,
      display: "flex",
      flexDirection: "column",
      width: 235,
      border: "1px solid #F1F1F1",
      padding: 15,
      borderRadius: 2,
      zIndex: "100",
      background: "white",
      boxShadow: "3px 3px 5px #BFBDBD",
    },
    ".rdw-image-modal-header": {
      fontSize: 15,
      margin: "10px 0",
      display: "flex",
    },
    ".rdw-image-modal-header-option": {
      width: "50%",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    ".rdw-image-modal-header-label": {
      width: 80,
      background: "#f1f1f1",
      border: "1px solid #f1f1f1",
      marginTop: 5,
    },
    ".rdw-image-modal-header-label-highlighted": {
      background: "#6EB8D4",
      borderBottom: "2px solid #0a66b7",
    },
    ".rdw-image-modal-upload-option": {
      width: "100%",
      color: "gray",
      cursor: "pointer",
      display: "flex",
      border: "none",
      fontSize: 15,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f1f1f1",
      outline: "2px dashed gray",
      outlineOffset: -10,
      margin: "10px 0",
      padding: "9px 0",
    },
    ".rdw-image-modal-upload-option-highlighted": {
      outline: "2px dashed #0a66b7",
    },
    ".rdw-image-modal-upload-option-label": {
      cursor: "pointer",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
    ".rdw-image-modal-upload-option-label span": {
      padding: "0 20px",
    },
    ".rdw-image-modal-upload-option-image-preview": {
      maxWidth: "100%",
      maxHeight: 200,
    },
    ".rdw-image-modal-upload-option-input": {
      width: 0.1,
      height: 0.1,
      opacity: "0",
      overflow: "hidden",
      position: "absolute",
      zIndex: "-1",
    },
    ".rdw-image-modal-url-section": {
      display: "flex",
      alignItems: "center",
    },
    ".rdw-image-modal-url-input": {
      width: "90%",
      height: 35,
      margin: "15px 0 12px",
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      fontSize: 15,
      padding: "0 5px",
    },
    ".rdw-image-modal-btn-section": {
      margin: "10px auto 0",
    },
    ".rdw-image-modal-url-input:focus": {
      outline: "none",
    },
    ".rdw-image-modal-btn": {
      margin: "0 5px",
      width: 75,
      height: 30,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      cursor: "pointer",
      background: "white",
      textTransform: "capitalize",
    },
    ".rdw-image-modal-btn:hover": {
      boxShadow: "1px 1px 0px #BFBDBD",
    },
    ".rdw-image-modal-btn:active": {
      boxShadow: "1px 1px 0px #BFBDBD inset",
    },
    ".rdw-image-modal-btn:focus": {
      outline: "none !important",
    },
    ".rdw-image-modal-btn:disabled": {
      background: "#ece9e9",
    },
    ".rdw-image-modal-spinner": {
      position: "absolute",
      top: -3,
      left: "0",
      width: "100%",
      height: "100%",
      opacity: "0.5",
    },
    ".rdw-image-modal-alt-input": {
      width: "70%",
      height: 20,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      fontSize: 12,
      marginLeft: 5,
    },
    ".rdw-image-modal-alt-input:focus": {
      outline: "none",
    },
    ".rdw-image-modal-alt-lbl": {
      fontSize: 12,
    },
    ".rdw-image-modal-size": {
      alignItems: "center",
      display: "flex",
      margin: "8px 0",
      justifyContent: "space-between",
    },
    ".rdw-image-modal-size-input": {
      width: "40%",
      height: 20,
      border: "1px solid #F1F1F1",
      borderRadius: 2,
      fontSize: 12,
    },
    ".rdw-image-modal-size-input:focus": {
      outline: "none",
    },
    ".rdw-image-mandatory-sign": {
      color: "red",
      marginLeft: 3,
      marginRight: 3,
    },
    ".rdw-remove-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
      position: "relative",
    },
    ".rdw-history-wrapper": {
      display: "flex",
      alignItems: "center",
      marginBottom: 6,
    },
    ".rdw-history-dropdownoption": {
      height: 40,
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-link-decorator-wrapper": {
      position: "relative",
    },
    ".rdw-link-decorator-icon": {
      position: "absolute",
      left: "40%",
      top: "0",
      cursor: "pointer",
      backgroundColor: "white",
    },
    ".rdw-mention-link": {
      textDecoration: "none",
      color: "#1236ff",
      backgroundColor: "#f0fbff",
      padding: "1px 2px",
      borderRadius: 2,
    },
    ".rdw-suggestion-wrapper": {
      position: "relative",
    },
    ".rdw-suggestion-dropdown": {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #F1F1F1",
      minWidth: 100,
      maxHeight: 150,
      overflow: "auto",
      background: "white",
      zIndex: "100",
    },
    ".rdw-suggestion-option": {
      padding: "7px 5px",
      borderBottom: "1px solid #f1f1f1",
    },
    ".rdw-suggestion-option-active": {
      backgroundColor: "#F1F1F1",
    },
    ".rdw-hashtag-link": {
      textDecoration: "none",
      color: "#1236ff",
      backgroundColor: "#f0fbff",
      padding: "1px 2px",
      borderRadius: 2,
    },
    ".rdw-image-alignment-options-popup": {
      position: "absolute",
      background: "white",
      display: "flex",
      padding: "5px 2px",
      borderRadius: 2,
      border: "1px solid #F1F1F1",
      width: 105,
      cursor: "pointer",
      zIndex: "100",
    },
    ".rdw-alignment-option-left": {
      justifyContent: "flex-start",
    },
    ".rdw-image-alignment-option": {
      height: 15,
      width: 15,
      minWidth: 15,
    },
    ".rdw-image-alignment": {
      position: "relative",
    },
    ".rdw-image-imagewrapper": {
      position: "relative",
    },
    ".rdw-image-center": {
      display: "flex",
      justifyContent: "center",
    },
    ".rdw-image-left": {
      display: "flex",
    },
    ".rdw-image-right": {
      display: "flex",
      justifyContent: "flex-end",
    },
    ".rdw-image-alignment-options-popup-right": {
      right: "0",
    },
    ".rdw-editor-main": {
      height: "100%",
      overflow: "auto",
      boxSizing: "border-box",
    },
    ".rdw-editor-toolbar": {
      padding: "6px 5px 0",
      borderRadius: 2,
      border: "1px solid #F1F1F1",
      display: "flex",
      justifyContent: "flex-start",
      background: "white",
      flexWrap: "wrap",
      fontSize: 15,
      marginBottom: 5,
      userSelect: "none",
    },
    ".public-DraftStyleDefault-block": {
      margin: "1em 0",
    },
    ".rdw-editor-wrapper:focus": {
      outline: "none",
    },
    ".rdw-editor-wrapper": {
      boxSizing: "content-box",
    },
    ".rdw-editor-main blockquote": {
      borderLeft: "5px solid #f1f1f1",
      paddingLeft: 5,
    },
    ".rdw-editor-main pre": {
      background: "#f1f1f1",
      borderRadius: 3,
      padding: "1px 10px",
    },
    ".DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content": {
      height: "inherit",
      textAlign: "initial",
    },
    ".public-DraftEditor-content[contenteditable=true]": {
      W: "read-write-plaintext-only",
    },
    ".DraftEditor-editorContainer": {
      backgroundColor: "rgba(255,255,255,0)",
      borderLeft: ".1px solid transparent",
      position: "relative",
      zIndex: "1",
      "& blockquote": {
        borderLeft: `4px solid #444`,
        paddingLeft: 24,
      },
      "& strong": {
        fontWeight: 600,
      },
      "& em": {
        fontStyle: "italic",
      },
      "& h1": {
        color: "#121130",
        fontWeight: "700",
        letterSpacing: ".2px",
        lineHeight: "2.2rem",
        fontSize: "32px",
        marginTop: "44px",
        marginBottom: "12px",
      },

      "& h2": {
        fontSize: "26px",
        fontWeight: "700",
        lineHeight: "2.2rem",
        marginTop: "32px",
        marginBottom: "12px",
      },

      "& h3": {
        fontSize: "21px",
        fontWeight: "700",
        lineHeight: "2.2rem",
        marginTop: "32px",
        marginBottom: "12px",
      },

      "& h4": {
        fontSize: "21px",
        fontWeight: "700",
        lineHeight: "2.2rem",
        marginTop: "32px",
        marginBottom: "12px",
      },

      "& h5": {
        fontSize: "21px",
        fontWeight: "700",
        lineHeight: "2.2rem",
        marginTop: "32px",
        marginBottom: "12px",
      },

      "& h6": {
        fontSize: "21px",
        fontWeight: "700",
        lineHeight: "2.2rem",
        marginTop: "32px",
        marginBottom: "12px",
      },

      "& a": {
        color: "#121130",
        textDecoration: "underline",
      },

      "& ol": {
        position: "relative",
        counterReset: "item",
      },

      "& ol li": {
        counterIncrement: "item",
        paddingLeft: "24px",

        "&:before": {
          content: 'counter(item) "."',
          position: "absolute",
          left: "0",
          fontWeight: "700",
        },
      },

      "& ul": {
        listStyleType: "disc",
      },

      "& ul li": {
        marginLeft: "18px",
      },

      "& p": {
        display: "block",
        marginTop: "4px",
        marginBottom: "8px",
        lineHeight: "1.2rem",
      },
      "& span": {
        display: "inline-block",
        marginTop: "4px",
        marginBottom: "8px",
        lineHeight: "1.2em",
      },
      "& img": {
        display: "block",
        maxWidth: "100%",
        marginBottom: "16px",
      },

      "& b": {
        fontWeight: "600",
      },
    },
    ".public-DraftEditor-block": {
      position: "relative",
    },
    ".DraftEditor-alignLeft .public-DraftStyleDefault-block": {
      textAlign: "left",
    },
    ".DraftEditor-alignLeft .public-DraftEditorPlaceholder-root": {
      left: "0",
      textAlign: "left",
    },
    ".DraftEditor-alignCenter .public-DraftStyleDefault-block": {
      textAlign: "center",
    },
    ".DraftEditor-alignCenter .public-DraftEditorPlaceholder-root": {
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
    },
    ".DraftEditor-alignRight .public-DraftStyleDefault-block": {
      textAlign: "right",
    },
    ".DraftEditor-alignRight .public-DraftEditorPlaceholder-root": {
      right: "0",
      textAlign: "right",
    },
    ".public-DraftEditorPlaceholder-root": {
      color: "#9197a3",
      position: "absolute",
      zIndex: "1",
    },
    ".public-DraftEditorPlaceholder-hasFocus": {
      color: "#bdc1c9",
    },
    ".DraftEditorPlaceholder-hidden": {
      display: "none",
    },
    ".public-DraftStyleDefault-block": {
      position: "relative",
      whiteSpace: "pre-wrap",
    },
    ".public-DraftStyleDefault-ltr": {
      direction: "ltr",
      textAlign: "left",
    },
    ".public-DraftStyleDefault-rtl": {
      direction: "rtl",
      textAlign: "right",
    },
    ".public-DraftStyleDefault-listLTR": {
      direction: "ltr",
    },
    ".public-DraftStyleDefault-listRTL": {
      direction: "rtl",
    },
    ".public-DraftStyleDefault-ol, .public-DraftStyleDefault-ul": {
      margin: "16px 0",
      padding: "0",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR": {
      marginLeft: "1.5em",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL": {
      marginRight: "1.5em",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR": {
      marginLeft: "3em",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL": {
      marginRight: "3em",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR": {
      marginLeft: "4.5em",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL": {
      marginRight: "4.5em",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR": {
      marginLeft: "6em",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL": {
      marginRight: "6em",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR": {
      marginLeft: "7.5em",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL": {
      marginRight: "7.5em",
    },
    ".public-DraftStyleDefault-unorderedListItem": {
      listStyleType: "square",
      position: "relative",
    },
    ".public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0": {
      listStyleType: "disc",
    },
    ".public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1": {
      listStyleType: "circle",
    },
    ".public-DraftStyleDefault-orderedListItem": {
      listStyleType: "none",
      position: "relative",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before": {
      left: -36,
      position: "absolute",
      textAlign: "right",
      width: 30,
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before": {
      position: "absolute",
      right: -36,
      textAlign: "left",
      width: 30,
    },
    ".public-DraftStyleDefault-orderedListItem:before": {
      content: 'counter(ol0) ". "',
      counterIncrement: "ol0",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before": {
      content: 'counter(ol1) ". "',
      counterIncrement: "ol1",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before": {
      content: 'counter(ol2) ". "',
      counterIncrement: "ol2",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before": {
      content: 'counter(ol3) ". "',
      counterIncrement: "ol3",
    },
    ".public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before": {
      content: 'counter(ol4) ". "',
      counterIncrement: "ol4",
    },
    ".public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset": {
      counterReset: "ol0",
    },
    ".public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset": {
      counterReset: "ol1",
    },
    ".public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset": {
      counterReset: "ol2",
    },
    ".public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset": {
      counterReset: "ol3",
    },
    ".public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset": {
      counterReset: "ol4",
    },
    // eslint-disable-next-line
    ".DraftEditor-root": {
      position: "relative",
      background: "#fff",
      border: "1px solid #ddd",
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      padding: 15,
    },
    ".DraftEditor-editor": {
      borderTop: "1px solid #ddd",
      cursor: "text",
      fontSize: 16,
      marginTop: 10,
    },
    ".DraftEditor-editor .public-DraftEditorPlaceholder-root, .DraftEditor-editor .public-DraftEditor-content": {
      margin: "0 -15px -15px",
      padding: 15,
    },
    ".DraftEditor-editor .public-DraftEditor-content": {
      minHeight: 100,
    },
    ".DraftEditor-hidePlaceholder .public-DraftEditorPlaceholder-root": {
      display: "none",
    },
    ".DraftEditor-editor .DraftEditor-blockquote": {
      borderLeft: "5px solid #eee",
      color: "#666",
      fontFamily: '"Hoefler Text", "Georgia", serif',
      fontStyle: "italic",
      margin: "16px 0",
      padding: "10px 20px",
    },
    ".DraftEditor-editor .public-DraftStyleDefault-pre": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 20,
    },
    ".DraftEditor-controls": {
      fontFamily: '"Helvetica", sans-serif',
      fontSize: 14,
      marginBottom: 5,
      userSelect: "none",
    },
    ".DraftEditor-styleButton": {
      color: "#999",
      cursor: "pointer",
      marginRight: 16,
      padding: "2px 0",
      display: "inline-block",
    },
    ".DraftEditor-activeButton": {
      color: "#5890ff",
    },
  },
};
