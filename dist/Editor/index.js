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

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _withStyles = require("elevate-ui/withStyles");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _values = require("lodash/values");

var _values2 = _interopRequireDefault(_values);

var _transform = require("lodash/transform");

var _transform2 = _interopRequireDefault(_transform);

var _generateUuid = require("../utils/generate-uuid");

var _generateUuid2 = _interopRequireDefault(_generateUuid);

var _Preview = require("./Preview");

var _Preview2 = _interopRequireDefault(_Preview);

var _Toolbox = require("../Toolbox");

var _Toolbox2 = _interopRequireDefault(_Toolbox);

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

// a little function to help us with reordering the result
function reorderContent(list, startIndex, endIndex) {
  var result = Array.from(list);

  var _result$splice = result.splice(startIndex, 1),
    _result$splice2 = _slicedToArray(_result$splice, 1),
    removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);

  return result;
}

// a little function to help us with reordering the result
function addContent(list, startIndex, draggableId) {
  var result = Array.from(list);

  // TODO: Object attr/content should be prefilled based on draggableId (content type)
  result.splice(startIndex, 0, {
    id: (0, _generateUuid2.default)(),
    type: draggableId,
    attrs: {},
    content: [],
  });

  return result;
}

var Editor = (function(_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        editingComponent: null,
        content: [
          {
            id: (0, _generateUuid2.default)(),
            type: "Image",
            attrs: {
              src: "https://placehold.it/200x200",
              width: 200,
              height: 200,
              alt: "Hello World",
              title: "Hello World",
            },
          },
          {
            id: (0, _generateUuid2.default)(),
            type: "Text",
            attrs: { value: "Hello World" },
          },
          {
            id: (0, _generateUuid2.default)(),
            type: "HorizontalRule",
            attrs: {},
          },
          {
            id: (0, _generateUuid2.default)(),
            type: "Row",
            attrs: {},
            content: [
              {
                id: (0, _generateUuid2.default)(),
                type: "Image",
                attrs: {
                  src: "https://placehold.it/200x200",
                  width: 200,
                  height: 200,
                  alt: "Hello World",
                  title: "Hello World",
                },
              },
              {
                id: (0, _generateUuid2.default)(),
                type: "Text",
                attrs: { value: "Hello World" },
              },
            ],
          },
          // {
          //   id: generateUUID(),
          //   type: "Video",
          //   attrs: {
          //     mp4:
          //       "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4",
          //     autoplay: true,
          //     width: 200,
          //     height: 200,
          //   },
          // },
          {
            id: (0, _generateUuid2.default)(),
            type: "Button",
            attrs: {
              children: "Hello Button",
            },
          },
          {
            id: (0, _generateUuid2.default)(),
            type: "Table",
            attrs: {
              columns: [
                {
                  Header: "Name",
                  accessor: "name",
                  minWidth: 120,
                },
                {
                  Header: "Phone",
                  accessor: "phone",
                  minWidth: 120,
                },
              ],
              data: [
                { name: "Jason Walsh", phone: "(111) 222-3333" },
                { name: "Chris Heninger", phone: "(111) 222-3333" },
              ],
            },
          },
          {
            id: (0, _generateUuid2.default)(),
            type: "Icon",
            attrs: {
              size: 24,
              name: "AlarmOn",
              color: "red",
            },
          },
        ],
      }),
      (_this.onDragEnd = function(result) {
        var source = result.source,
          destination = result.destination,
          draggableId = result.draggableId;

        // dropped outside the list

        if (!destination) {
          return;
        }

        var component = _this.findComponentById(destination.droppableId);
        var draggableIdIsUUID = draggableId.length === 36;

        // Dropping into itself should reorder the items
        if (component) {
          component.content = reorderContent(
            component.content,
            source.index,
            destination.index
          );
          _this.setState({ content: _this.state.content }); // mutates state directly, @todo refactor
        } else if (source.droppableId === destination.droppableId) {
          // Root page re-order
          var _content = reorderContent(
            _this.state.content,
            source.index,
            destination.index
          );

          _this.setState({ content: _content });
        } else {
          if (draggableIdIsUUID) {
            console.log("Noop: Functionality not yet supported");
            return; // invariant error, trying to addContent content, but content already exists and was just dragged outside draggable area
          }

          // Handle dropping from toolbox into preview
          // console.log(source, destination, draggableId);
          var _content2 = addContent(
            _this.state.content,
            destination.index,
            draggableId
          );
          _this.setState({ content: _content2 });
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(Editor, [
    {
      key: "flattenDeep",
      value: function flattenDeep(components) {
        var _this2 = this;

        var flattened =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : [];

        return (0, _values2.default)(
          (0, _transform2.default)(
            components,
            function(memo, component) {
              memo[component.id] = component;

              if (component.content && component.content.length) {
                memo = memo.concat(_this2.flattenDeep(component.content, memo));
              }
            },
            flattened
          )
        );
      },
    },
    {
      key: "findComponentById",
      value: function findComponentById(id) {
        var allContent = this.flattenDeep(this.state.content);
        return (0, _find2.default)(allContent, { id: id });
      },
    },
    {
      key: "handleComponentClick",
      value: function handleComponentClick(e, id) {
        e.stopPropagation();

        this.setState({
          editingComponent: this.findComponentById(id),
        });
      },
    },
    {
      key: "handleUpdateContent",
      value: function handleUpdateContent(id, attrs) {
        var component = this.findComponentById(id);
        component.attrs = attrs; // mutates this.state.content directly, not ideal
        this.setState({ editingComponent: null, content: this.state.content });
      },
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        var classes = this.props.classes;
        var content = this.state.content;

        return _jsx(
          "div",
          {
            className: classes.root,
          },
          void 0,
          _jsx(
            "div",
            {
              className: classes.topNav,
            },
            void 0,
            "Elevate Editor"
          ),
          _jsx(
            "div",
            {
              className: classes.editor,
            },
            void 0,
            _jsx(
              _reactBeautifulDnd.DragDropContext,
              {
                onDragEnd: this.onDragEnd,
              },
              void 0,
              _jsx(
                "div",
                {
                  className: classes.preview,
                },
                void 0,
                _jsx(_Preview2.default, {
                  content: content,
                  handleComponentClick: this.handleComponentClick.bind(this),
                })
              ),
              _jsx(_Toolbox2.default, {
                onSave: function onSave(id, attrs) {
                  return _this3.handleUpdateContent(id, attrs);
                },
                className: classes.toolbox,
                editingComponent: this.state.editingComponent,
              })
            )
          )
        );
      },
    },
  ]);

  return Editor;
})(_react.Component);

exports.default = (0, _withStyles2.default)(function(theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#fff",
    },
    topNav: {
      width: "100%",
      height: "64px",
      fontSize: "22px",
      lineHeight: "32px",
      fontWeight: "700",
      color: "#fff",
      backgroundColor: theme.colors.gray900,
      padding: "16px",
    },
    editor: {
      display: "flex",
    },
    preview: {
      width: "100%",
      height: "calc(100vh - 64px)",
      overflowX: "hidden",
      overflowY: "scroll",
    },
    toolbox: {
      width: "300px",
      height: "calc(100vh - 64px)",
    },
  };
})(Editor);
