'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color:rgba(128, 0, 0, 0.5); \n  border: 2px dashed red; \n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n  box-shadow: ', ';\n'], ['\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color:rgba(128, 0, 0, 0.5); \n  border: 2px dashed red; \n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n  box-shadow: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject, function (_ref) {
  var active = _ref.active;
  return active ? '0 0 3px 3px black inset' : 'none';
});

function Rectangle(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return _react2.default.createElement(Container, {
    className: props.className,
    style: _extends({
      left: geometry.x + '%',
      top: geometry.y + '%',
      height: geometry.height + '%',
      width: geometry.width + '%'
    }, props.style),
    active: props.active
  });
}

Rectangle.defaultProps = {
  className: '',
  style: {}
};

exports.default = Rectangle;
module.exports = exports['default'];