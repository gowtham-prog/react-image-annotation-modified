var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color:rgba(128, 0, 0, 0.5); \n  border: 2px dashed red; \n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n  box-shadow: ', ';\n'], ['\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color:rgba(128, 0, 0, 0.5); \n  border: 2px dashed red; \n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n  box-shadow: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';

var Container = styled.div(_templateObject, function (_ref) {
  var active = _ref.active;
  return active ? '0 0 3px 3px black inset' : 'none';
});

function Rectangle(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return React.createElement(Container, {
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

export default Rectangle;