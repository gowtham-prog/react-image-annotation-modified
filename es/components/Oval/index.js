var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: dotted 2px red;\n  border-radius: 100%;\n  box-shadow: 0px 0px px 1px black inset;\n  background-color:rgba(128, 0, 0, 0.5); \n  transition: box-shadow 0.21s ease-in-out;\n'], ['\n  border: dotted 2px red;\n  border-radius: 100%;\n  box-shadow: 0px 0px px 1px black inset;\n  background-color:rgba(128, 0, 0, 0.5); \n  transition: box-shadow 0.21s ease-in-out;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled from 'styled-components';

var Container = styled.div(_templateObject);

function Oval(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return React.createElement(Container, {
    className: props.className,
    style: _extends({
      position: 'absolute',
      left: geometry.x + '%',
      top: geometry.y + '%',
      height: geometry.height + '%',
      width: geometry.width + '%',
      boxShadow: props.active && '0 0 3px 3px black inset'
    }, props.style)
  });
}

Oval.defaultProps = {
  className: '',
  style: {}
};

export default Oval;