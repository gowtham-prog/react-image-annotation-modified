var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n'], ['\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: white;\n  border-radius: 5px; \n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px; \n  margin-top: 8px;\n  margin-left: 8px;\n  color: black; \n  font-weight: bold; \n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n'], ['\n  background: white;\n  border-radius: 5px; \n  box-shadow:\n    0px 1px 5px 0px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px; \n  margin-top: 8px;\n  margin-left: 8px;\n  color: black; \n  font-weight: bold; \n  animation: ', ' 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  overflow: hidden;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import styled, { keyframes } from 'styled-components';
import TextEditor from '../TextEditor';
import { getHorizontallyCentralPoint, getVerticallyLowestPoint } from '../../utils/pointsUtils';

var fadeInScale = keyframes(_templateObject);

var Container = styled.div(_templateObject2, fadeInScale);

function Editor(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return React.createElement(
    Container,
    {
      className: props.className,
      style: _extends({
        position: 'absolute',
        left: '' + (geometry.type === 'POLYGON' ? getHorizontallyCentralPoint(geometry.points) + '%' : geometry.x + '%'),
        top: '' + (geometry.type === 'POLYGON' ? getVerticallyLowestPoint(geometry.points) + 10 * (1 / 5) + 10 * (4 / 5) * (1 / 10) + '%' : geometry.y + geometry.height + '%') }, props.style)
    },
    React.createElement(TextEditor, {
      onChange: function onChange(e) {
        return props.onChange(_extends({}, props.annotation, {
          data: _extends({}, props.annotation.data, {
            text: e.target.value
          })
        }));
      },
      onSubmit: props.onSubmit,
      value: props.annotation.data && props.annotation.data.text
    })
  );
}

Editor.defaultProps = {
  className: '',
  style: {}
};

export default Editor;