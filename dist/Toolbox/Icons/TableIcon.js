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
    "M20.67,21.36h6.66V36H20.67ZM30,36h4a2.68,2.68,0,0,0,2.67-2.67v-12H30Zm4-24H14a2.68,2.68,0,0,0-2.67,2.67v4H36.67v-4A2.68,2.68,0,0,0,34,12ZM11.33,33.33A2.68,2.68,0,0,0,14,36h4V21.33H11.33Z",
});

var TableIcon = function TableIcon(_ref) {
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

TableIcon.displayName = "TableIcon";

TableIcon.defaultProps = {
  size: 48,
  color: "currentcolor",
};

exports.default = TableIcon;
