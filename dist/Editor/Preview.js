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

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
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

var _renderComponent = require("../utils/render-component");

var _renderComponent2 = _interopRequireDefault(_renderComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var getItemStyle = function getItemStyle(isDragging, draggableStyle) {
  return _extends(
    {
      // change background colour if dragging
      background: isDragging ? "#d0eaff" : "#fff",
    },
    draggableStyle
  );
};

var Preview = (function(_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(
      this,
      (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Preview, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          content = _props.content,
          handleComponentClick = _props.handleComponentClick;

        return _jsx(
          _reactBeautifulDnd.Droppable,
          {
            droppableId: "content",
          },
          void 0,
          function(provided, snapshot) {
            return _react2.default.createElement(
              "div",
              {
                ref: provided.innerRef,
                className: (0, _classnames2.default)(classes.root, className),
              },
              content.map(function(props, idx) {
                return _jsx(
                  _reactBeautifulDnd.Draggable,
                  {
                    draggableId: props.id,
                    index: idx,
                  },
                  props.id,
                  function(provided, snapshot) {
                    return _react2.default.createElement(
                      "div",
                      _extends(
                        {
                          className: classes.item,
                          ref: provided.innerRef,
                        },
                        provided.draggableProps,
                        provided.dragHandleProps,
                        {
                          style: getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          ),
                          onClick: function onClick(e) {
                            return handleComponentClick(e, props.id);
                          },
                        }
                      ),
                      (0, _renderComponent2.default)(
                        _extends(
                          {
                            id: props.id,
                            type: props.type,
                            content: props.content,
                          },
                          props.attrs,
                          {
                            handleComponentClick: handleComponentClick,
                          }
                        )
                      )
                    );
                  }
                );
              }),
              provided.placeholder
            );
          }
        );
      },
    },
  ]);

  return Preview;
})(_react.Component);

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    root: {
      width: "100%",
      maxWidth: "600px", // todo: this should be a setting
      padding: "8px",
      margin: "auto",

      "& > * + *": {
        marginTop: "8px",
      },
    },
    item: {
      display: "flex",
      userSelect: "none",
      border: "2px solid transparent",

      "&:hover": {
        borderColor: "#d0eaff",
      },
    },
  };
})(Preview);
