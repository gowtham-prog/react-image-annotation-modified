'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: white;\n  border-radius: 5px; \n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px; \n  margin-top: 8px;\n  margin-left: 8px;\n  color: black; \n  font-weight: bold; \n'], ['\n  background: white;\n  border-radius: 5px; \n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px; \n  margin-top: 8px;\n  margin-left: 8px;\n  color: black; \n  font-weight: bold; \n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _pointsUtils = require('../../utils/pointsUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject);

function Content(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return _react2.default.createElement(
    Container,
    {
      style: _extends({
        position: 'absolute',
        left: '' + (geometry.type === 'POLYGON' ? (0, _pointsUtils.getHorizontallyCentralPoint)(geometry.points) + '%' : geometry.x + '%'),
        top: '' + (geometry.type === 'POLYGON' ? (0, _pointsUtils.getVerticallyLowestPoint)(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 100) + '%' : geometry.y + geometry.height + '%') }, props.style),
      className: props.className,
      geometry: geometry
    },
    props.annotation.data && props.annotation.data.text
  );
}

Content.defaultProps = {
  style: {},
  className: ''
};

exports.default = Content;
module.exports = exports['default'];