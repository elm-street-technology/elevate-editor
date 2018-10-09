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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require("./App");

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require("./registerServiceWorker");

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_reactDom2.default.render(
  _jsx(_App2.default, {}),
  document.getElementById("root")
);
(0, _registerServiceWorker2.default)();
