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

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("elevate-ui/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Icons = require("./Icons");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ComponentsIcons = {
  HorizontalRule: _Icons.HorizontalRuleIcon,
  Image: _Icons.ImageIcon,
  Text: _Icons.TextIcon,
  Row: "div",
  Video: _Icons.VideoIcon,
  Button: _Icons.ButtonIcon,
  Table: _Icons.TableIcon,
  Icon: _Icons.IconIcon,
};

var getItemStyle = function getItemStyle(isDragging, draggableStyle) {
  return _extends(
    {
      // change background colour if dragging
      background: isDragging ? "#d0eaff" : "#fafafa",
    },
    draggableStyle
  );
};

var ToolboxItem = function ToolboxItem(_ref) {
  var classes = _ref.classes,
    className = _ref.className,
    type = _ref.item.type,
    index = _ref.index;
  return _jsx(
    _reactBeautifulDnd.Draggable,
    {
      draggableId: type,
      index: index,
    },
    index,
    function(provided, snapshot) {
      return _react2.default.createElement(
        "div",
        _extends(
          {
            ref: provided.innerRef,
          },
          provided.draggableProps,
          provided.dragHandleProps,
          {
            className: (0, _classnames2.default)(classes.root, className),
            style: getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            ),
          }
        ),
        _jsx(
          "div",
          {
            className: classes.icon,
          },
          void 0,
          _react2.default.createElement(ComponentsIcons[type])
        ),
        _jsx(
          "div",
          {
            className: classes.label,
          },
          void 0,
          type
        )
      );
    }
  );
};

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "64px",
      color: "black",
      border: "1px solid #E0E0E0",
      borderRadius: "4px",
      userSelect: "none",
      padding: "8px",

      "&:hover": {
        boxShadow: theme.globalBoxShadow,
      },
    },
    icon: {
      display: "flex",
      color: "#fff",
      background: "#BDBDBD",
      borderRadius: "4px",
      marginRight: "12px",
    },
    label: {
      fontSize: "16px",
      lineHeight: "1.4",
      fontWeight: "600",
      color: "#424242",
    },
  };
})(ToolboxItem);
