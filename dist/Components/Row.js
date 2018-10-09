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

var _withStyles = require("elevate-ui/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactBeautifulDnd = require("react-beautiful-dnd");

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

var grid = 8;
var getItemStyle = function getItemStyle(isDragging, draggableStyle) {
  return _extends(
    {
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      padding: grid * 2,
      margin: "0 " + grid + "px 0 " + grid + "px",

      // change background colour if dragging
      background: isDragging ? "lightgreen" : "#fafafa",
    },
    draggableStyle
  );
};

var getHoverStyle = function getHoverStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? "lightblue" : "#fafafa",
  };
};

var Row = (function(_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(
      this,
      (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments)
    );
  }

  _createClass(Row, [
    {
      key: "renderChildren",
      value: function renderChildren() {
        var _props = this.props,
          classes = _props.classes,
          content = _props.content,
          handleComponentClick = _props.handleComponentClick;

        return (
          content &&
          content.map(function(child, idx) {
            return _jsx(
              _reactBeautifulDnd.Draggable,
              {
                draggableId: child.id,
                index: idx,
              },
              child.id,
              function(provided, snapshot) {
                return _react2.default.createElement(
                  "div",
                  _extends(
                    {
                      className: classes && classes.item,
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
                        return handleComponentClick(e, child.id);
                      },
                    }
                  ),
                  (0, _renderComponent2.default)(
                    _extends(
                      {
                        id: child.id,
                        type: child.type,
                        content: child.content,
                      },
                      child.attrs,
                      {
                        handleComponentClick: handleComponentClick,
                      }
                    )
                  )
                );
              }
            );
          })
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
          id = _props2.id,
          classes = _props2.classes;

        return _jsx(
          "div",
          {
            className: classes && classes.root,
          },
          void 0,
          _jsx(
            _reactBeautifulDnd.Droppable,
            {
              droppableId: id,
            },
            void 0,
            function(provided, snapshot) {
              return _react2.default.createElement(
                "div",
                {
                  ref: provided.innerRef,
                  style: getHoverStyle(snapshot.isDraggingOver),
                  className: classes && classes.row,
                },
                _this2.renderChildren()
              );
            }
          )
        );
      },
    },
  ]);

  return Row;
})(_react.Component);

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    root: {
      width: "100%",
      height: "auto",
      overflowY: "hidden",
      overflowX: "scroll",
      padding: "8px",
    },
    row: {
      display: "flex",
    },
    item: {
      margin: "0 8px",
      "&:hover": {
        outline: "#f15953 solid 2px",
      },
    },
  };
})(Row);
