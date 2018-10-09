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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = require("elevate-ui/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ToolboxItem = require("./ToolboxItem");

var _ToolboxItem2 = _interopRequireDefault(_ToolboxItem);

var _SidebarLayout = require("./SidebarLayout");

var _SidebarLayout2 = _interopRequireDefault(_SidebarLayout);

var _renderComponent = require("../utils/render-component");

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

var items = Object.keys(_renderComponent.Components).map(function(type) {
  return {
    type: type,
  };
});

var Toolbox = (function(_Component) {
  _inherits(Toolbox, _Component);

  function Toolbox() {
    _classCallCheck(this, Toolbox);

    return _possibleConstructorReturn(
      this,
      (Toolbox.__proto__ || Object.getPrototypeOf(Toolbox)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Toolbox, [
    {
      key: "renderSidebar",
      value: function renderSidebar() {
        var _props = this.props,
          editingComponent = _props.editingComponent,
          onSave = _props.onSave,
          classes = _props.classes,
          className = _props.className;

        return _jsx(_SidebarLayout2.default, {
          component: editingComponent,
          onSave: onSave,
          className: (0, _classnames2.default)(classes.root, className),
        });
      },
    },
    {
      key: "render",
      value: function render() {
        var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          editingComponent = _props2.editingComponent;

        if (editingComponent) {
          return this.renderSidebar();
        }

        return _jsx(
          _reactBeautifulDnd.Droppable,
          {
            droppableId: "toolbox",
            isDropDisabled: true,
          },
          void 0,
          function(provided, snapshot) {
            return _react2.default.createElement(
              "div",
              {
                ref: provided.innerRef,
                className: (0, _classnames2.default)(classes.root, className),
              },
              items.map(function(item, i) {
                return _jsx(
                  _ToolboxItem2.default,
                  {
                    item: item,
                    index: i,
                  },
                  i
                );
              })
            );
          }
        );
      },
    },
  ]);

  return Toolbox;
})(_react.Component);

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    root: {
      flexShrink: "0",
      width: "100%",
      height: "auto",
      overflowX: "hidden",
      overflowY: "scroll",
      background: "#F5F5F5",
      padding: "8px",
      borderLeft: "1px solid #E0E0E0",

      "& > * + *": {
        marginTop: "8px",
      },
    },
  };
})(Toolbox);
