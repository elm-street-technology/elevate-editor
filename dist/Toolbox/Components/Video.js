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

var _formik = require("formik");

var _yup = require("yup");

var Yup = _interopRequireWildcard(_yup);

var _Input = require("elevate-ui/Input");

var _Input2 = _interopRequireDefault(_Input);

var _SidebarForm = require("../Common/SidebarForm");

var _SidebarForm2 = _interopRequireDefault(_SidebarForm);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = _jsx(_formik.Field, {
  id: "mp4",
  name: "mp4",
  label: "Mp4",
  component: _Input2.default,
  type: "text",
});

var _ref3 = _jsx(_formik.Field, {
  id: "ogg",
  name: "ogg",
  label: "Ogg",
  component: _Input2.default,
  type: "text",
});

var _ref4 = _jsx(_formik.Field, {
  id: "webm",
  name: "webm",
  label: "WebM",
  component: _Input2.default,
  type: "text",
});

var _ref5 = _jsx(_formik.Field, {
  id: "autoplay",
  name: "autoplay",
  label: "Autoplay",
  component: _Input2.default,
  type: "text",
});

var _ref6 = _jsx(_formik.Field, {
  id: "width",
  name: "width",
  label: "Width",
  component: _Input2.default,
  type: "number",
});

var _ref7 = _jsx(_formik.Field, {
  id: "height",
  name: "height",
  label: "Height",
  component: _Input2.default,
  type: "number",
});

var Image = function Image(_ref) {
  var _ref$component = _ref.component,
    id = _ref$component.id,
    attrs = _ref$component.attrs,
    onSave = _ref.onSave;
  return _jsx(
    _SidebarForm2.default,
    {
      id: id,
      attrs: attrs,
      onSave: onSave,
      validationSchema: function validationSchema() {
        return Yup.object().shape({
          mp4: Yup.string(),
          ogg: Yup.string(),
          webm: Yup.string(),
          autoplay: Yup.boolean(),
          width: Yup.number().required(),
          height: Yup.number().required(),
        });
      },
    },
    void 0,
    _ref2,
    _ref3,
    _ref4,
    _ref5,
    _ref6,
    _ref7
  );
};

exports.default = Image;
