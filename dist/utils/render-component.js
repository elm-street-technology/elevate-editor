Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Components = undefined;

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

exports.default = function(props) {
  var childProps = (0, _cloneDeep2.default)(props);
  switch (props.type) {
    case "Button":
    case "Icon":
      childProps = (0, _omit2.default)(props, "handleComponentClick"); // prevent warning
      break;
    default:
      break;
  }

  return _jsx(
    "div",
    {
      style: {
        display: "flex",
        width: "100%",
        padding: props.padding,
      },
    },
    props.id,
    _react2.default.createElement(Components[props.type], childProps)
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _cloneDeep = require("lodash/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _HorizontalRule = require("../Components/HorizontalRule");

var _HorizontalRule2 = _interopRequireDefault(_HorizontalRule);

var _Image = require("../Components/Image");

var _Image2 = _interopRequireDefault(_Image);

var _Text = require("../Components/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Row = require("../Components/Row");

var _Row2 = _interopRequireDefault(_Row);

var _Video = require("../Components/Video");

var _Video2 = _interopRequireDefault(_Video);

var _Button = require("elevate-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Table = require("elevate-ui/Table");

var _Table2 = _interopRequireDefault(_Table);

var _Icon = require("elevate-ui/Icon/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Components = (exports.Components = {
  Text: _Text2.default,
  Image: _Image2.default,
  Video: _Video2.default,
  Button: _Button2.default,
  HorizontalRule: _HorizontalRule2.default,
  Table: _Table2.default,
  Icon: _Icon2.default,
  Row: _Row2.default,
});
