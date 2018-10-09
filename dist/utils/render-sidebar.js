Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = function(props) {
  props.component.attrs.padding = props.component.attrs.padding || 0;
  return _react2.default.createElement(Components[props.component.type], props);
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("../Toolbox/Components/Button");

var _Button2 = _interopRequireDefault(_Button);

var _HorizontalRule = require("../Toolbox/Components/HorizontalRule");

var _HorizontalRule2 = _interopRequireDefault(_HorizontalRule);

var _Icon = require("../Toolbox/Components/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Image = require("../Toolbox/Components/Image");

var _Image2 = _interopRequireDefault(_Image);

var _Row = require("../Toolbox/Components/Row");

var _Row2 = _interopRequireDefault(_Row);

var _Text = require("../Toolbox/Components/Text");

var _Text2 = _interopRequireDefault(_Text);

var _Video = require("../Toolbox/Components/Video");

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Components = {
  Button: _Button2.default,
  HorizontalRule: _HorizontalRule2.default,
  Icon: _Icon2.default,
  Image: _Image2.default,
  Row: _Row2.default,
  Text: _Text2.default,
  Video: _Video2.default,
};
