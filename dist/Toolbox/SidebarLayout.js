Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _jsx = (function() {
  var REACT_ELEMENT_TYPE =
    (typeof Symbol === "function" &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) {
      props = {};
    }
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : "" + key,
      ref: null,
      props: props,
      _owner: null,
    };
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("elevate-ui/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _renderSidebar = require("../utils/render-sidebar");

var _renderSidebar2 = _interopRequireDefault(_renderSidebar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SidebarLayout = function SidebarLayout(props) {
  return _jsx(
    "div",
    {
      className: (0, _classnames2.default)(props.classes.form, props.className),
    },
    void 0,
    _jsx(
      "h1",
      {
        className: props.classes.header,
      },
      void 0,
      "Editing ",
      props.component.type
    ),
    (0, _renderSidebar2.default)(props),
    _jsx(
      "div",
      {
        className: props.classes.debug,
      },
      void 0,
      "component ID: ",
      props.component.id
    )
  );
};

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: "8px",
    },
    header: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    debug: {
      position: "absolute",
      bottom: "0",
      marginBottom: "8px",
      fontStyle: "italic",
      fontSize: "12px",
      color: "#333",
    },
  };
})(SidebarLayout);
