"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _formik = require("formik");

var _Padding = require("./Padding");

var _Padding2 = _interopRequireDefault(_Padding);

var _Submit = require("./Submit");

var _Submit2 = _interopRequireDefault(_Submit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarForm = function SidebarForm((_temp = _ref, _ref2 = <_formik.Form>
        {children}
        <_Padding2.default />
        <_Submit2.default />
      </_formik.Form>, _temp)) {
  var _temp, _ref2;

  var id = _ref.id,
      attrs = _ref.attrs,
      onSave = _ref.onSave,
      children = _ref.children,
      validationSchema = _ref.validationSchema;
  return _jsx(_formik.Formik, {
    initialValues: _extends({}, attrs),
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, props) {
      return onSave(id, values);
    },
    render: function render() {
      return _ref2;
    }
  });
};

exports.default = SidebarForm;