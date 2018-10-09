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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

var _ref2 = _jsx("path", {
  d:
    "M22.8,21.3,26.4,24l-3.6,2.7ZM35,17V31a2.15,2.15,0,0,1-2,2H15a2,2,0,0,1-2-2V17a2.15,2.15,0,0,1,2-2H33A2.15,2.15,0,0,1,35,17Zm-5,7a6,6,0,1,0-6,6A6,6,0,0,0,30,24Z",
});

var VideoIcon = function VideoIcon(_ref) {
  var size = _ref.size,
    color = _ref.color,
    props = _objectWithoutProperties(_ref, ["size", "color"]);

  return _react2.default.createElement(
    "svg",
    _extends({}, props, {
      viewBox: "0 0 48 48",
      width: size,
      height: size,
      fill: color,
    }),
    _ref2
  );
};

VideoIcon.displayName = "VideoIcon";

VideoIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

exports.default = VideoIcon;
