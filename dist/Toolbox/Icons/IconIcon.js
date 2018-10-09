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
    "M25.42,16.92H22.58v5.66H16.92v2.84h5.66v5.66h2.84V25.42h5.66V22.58H25.42ZM24,9.83A14.17,14.17,0,1,0,38.17,24,14.18,14.18,0,0,0,24,9.83Zm0,25.5A11.33,11.33,0,1,1,35.33,24,11.34,11.34,0,0,1,24,35.33Z",
});

var IconIcon = function IconIcon(_ref) {
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

IconIcon.displayName = "IconIcon";

IconIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

exports.default = IconIcon;
