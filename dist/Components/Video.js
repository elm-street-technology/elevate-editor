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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = _jsx(
  "div",
  {},
  void 0,
  "Your browser does not support the video tag."
);

var Video = function Video(_ref) {
  var autoplay = _ref.autoplay,
    mp4 = _ref.mp4,
    ogg = _ref.ogg,
    webm = _ref.webm,
    width = _ref.width,
    height = _ref.height;
  return _jsx(
    "video",
    {
      autoPlay: autoplay,
      width: width,
      height: height,
    },
    void 0,
    mp4
      ? _jsx("source", {
          src: mp4,
          type: "video/mp4",
        })
      : null,
    ogg
      ? _jsx("source", {
          src: ogg,
          type: "video/ogg",
        })
      : null,
    webm
      ? _jsx("source", {
          src: webm,
          type: "video/webm",
        })
      : null,
    _ref2
  );
};

exports.default = Video;
