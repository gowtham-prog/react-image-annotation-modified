var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\nborder: solid 3px white;\nborder-radius: 50%;\nbox-sizing: border-box;\nbox-shadow:\n  0 0 0 1px rgba(0,0,0,0.3),\n  0 0 0 2px rgba(0,0,0,0.2),\n  0 5px 4px rgba(0,0,0,0.4);\nheight: 10px;\nposition: absolute;\ntransform: translate3d(-50%, -50%, 0);\nwidth: 10px;\n'], ['\nborder: solid 3px white;\nborder-radius: 50%;\nbox-sizing: border-box;\nbox-shadow:\n  0 0 0 1px rgba(0,0,0,0.3),\n  0 0 0 2px rgba(0,0,0,0.2),\n  0 5px 4px rgba(0,0,0,0.4);\nheight: 10px;\nposition: absolute;\ntransform: translate3d(-50%, -50%, 0);\nwidth: 10px;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import LineTo from 'react-lineto';
import styled from 'styled-components';

var PointDot = styled.div(_templateObject);

function edgesFromPoints(points) {
  if (!points || points.length < 3) return [];

  var edges = [];
  for (var i = 0; i < points.length; ++i) {
    if (i + 1 === points.length) {
      edges.push(Math.hypot(points[0].x - points[i].x, points[0].y - points[i].y));
    } else {
      edges.push(Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y));
    }
  }

  return edges;
}

function Polygon(props) {
  var geometry = props.annotation.geometry;


  if (!geometry || !geometry.points || geometry.points.length === 0) return null;

  return React.createElement(
    'div',
    {
      className: 'linesContainer ' + props.className,
      style: _extends({
        width: '100%',
        height: '100%'
      }, props.style)
    },
    geometry.points.length >= 3 && geometry.points.map(function (item, i) {
      var prevItem = i === 0 ? geometry.points[geometry.points.length - 1] : geometry.points[i - 1];
      return React.createElement(LineTo, {
        key: i + '_' + item.x + '_' + item.y + '_' + prevItem.x + '_' + prevItem.y,
        from: 'linesContainer',
        fromAnchor: item.x + '% ' + item.y + '%',
        to: 'linesContainer',
        toAnchor: prevItem.x + '% ' + prevItem.y + '%',
        borderColor: 'white',
        borderStyle: 'dashed',
        borderWidth: 2,
        className: !props.active ? 'Polygon-LineTo' : 'Polygon-LineToActive'
      });
    }),
    geometry.points.map(function (item, i) {
      return React.createElement(PointDot, {
        key: i + '_' + item.x + '_' + item.y,
        style: {
          left: item.x + '%',
          top: item.y + '%'
        }
      });
    })
  );
}

Polygon.defaultProps = {
  className: '',
  style: {}
};

export default Polygon;