var _templateObject = _taggedTemplateLiteralLoose(['\n  clear: both;\n  position: relative;\n  width: 100%;\n  &:hover ', ' {\n    opacity: 1;\n  }\n'], ['\n  clear: both;\n  position: relative;\n  width: 100%;\n  &:hover ', ' {\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: block;\n  width: 100%;\n'], ['\n  display: block;\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import compose from '../utils/compose';
import isMouseHovering from '../utils/isMouseHovering';
import withRelativeMousePos from '../utils/withRelativeMousePos';
import { PolygonSelector } from '../selectors';
import defaultProps from './defaultProps';
import Overlay from './Overlay';

var Container = styled.div(_templateObject, Overlay);

var Img = styled.img(_templateObject2);

var Items = styled.div(_templateObject3);

var Target = Items;

var Annotation = function (_Component) {
  _inherits(Annotation, _Component);

  function Annotation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Annotation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceUpdateComponent = function () {
      _this.forceUpdate();
    }, _this.setInnerRef = function (el) {
      _this.container = el;
      _this.props.relativeMousePos.innerRef(el);
      _this.props.innerRef(el);
    }, _this.getSelectorByType = function (type) {
      return _this.props.selectors.find(function (s) {
        return s.TYPE === type;
      });
    }, _this.getTopAnnotationAt = function (x, y) {
      var _this$props = _this.props,
          annotations = _this$props.annotations,
          getSelectorByType = _this$props.getSelectorByType,
          container = _this$props.container;


      if (!container) return;

      var intersections = annotations.map(function (annotation) {
        var geometry = annotation.geometry;

        var selector = getSelectorByType(geometry.type);

        return selector.intersects({ x: x, y: y }, geometry, container) ? annotation : false;
      }).filter(function (a) {
        return !!a;
      }).sort(function (a, b) {
        var aSelector = getSelectorByType(a.geometry.type);
        var bSelector = getSelectorByType(b.geometry.type);

        return aSelector.area(a.geometry, container) - bSelector.area(b.geometry, container);
      });

      return intersections[0];
    }, _this.onTargetMouseMove = function (e) {
      _this.props.relativeMousePos.onMouseMove(e);
      _this.onMouseMove(e);
    }, _this.onTargetMouseLeave = function (e) {
      _this.props.relativeMousePos.onMouseLeave(e);
    }, _this.onMouseUp = function (e) {
      _this.callSelectorMethod('onMouseUp', e);
    }, _this.onMouseDown = function (e) {
      _this.callSelectorMethod('onMouseDown', e);
    }, _this.onMouseMove = function (e) {
      _this.callSelectorMethod('onMouseMove', e);
    }, _this.onClick = function (e) {
      var onClickCheckFunc = _this.props.onClickCheckFunc;


      if (!onClickCheckFunc || onClickCheckFunc(e)) {
        _this.callSelectorMethod('onClick', e);
      }
    }, _this.onSelectionComplete = function () {
      _this.callSelectorMethod('onSelectionComplete');
    }, _this.onSelectionClear = function () {
      _this.callSelectorMethod('onSelectionClear');
    }, _this.onSelectionUndo = function () {
      _this.callSelectorMethod('onSelectionUndo');
    }, _this.onSubmit = function () {
      _this.props.onSubmit(_this.props.value);
    }, _this.callSelectorMethod = function (methodName, e) {
      if (_this.props.disableAnnotation) {
        return;
      }

      if (_this.props[methodName]) {
        _this.props[methodName](e);
      } else {
        var selector = _this.getSelectorByType(_this.props.type);
        if (selector && selector.methods[methodName]) {
          var value = selector.methods[methodName](_this.props.value, e);

          if (typeof value === 'undefined') {
            if (process.env.NODE_ENV !== 'production') {
              console.error('\n              ' + methodName + ' of selector type ' + _this.props.type + ' returned undefined.\n              Make sure to explicitly return the previous state\n            ');
            }
          } else {
            _this.props.onChange(value);
          }
        }
      }
    }, _this.shouldAnnotationBeActive = function (annotation, top) {
      if (_this.props.activeAnnotations) {
        var isActive = !!_this.props.activeAnnotations.find(function (active) {
          return _this.props.activeAnnotationComparator(annotation, active);
        });

        return isActive || top === annotation;
      } else {
        return top === annotation;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Annotation.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener("resize", this.forceUpdateComponent);
  };

  Annotation.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.forceUpdateComponent);
  };

  Annotation.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.imageZoomAmount !== this.props.imageZoomAmount) {
      this.forceUpdateComponent();
    }
  };

  Annotation.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        isMouseHovering = _props.isMouseHovering,
        renderHighlight = _props.renderHighlight,
        renderContent = _props.renderContent,
        renderSelector = _props.renderSelector,
        renderEditor = _props.renderEditor,
        renderOverlay = _props.renderOverlay,
        renderPolygonControls = _props.renderPolygonControls,
        topAnnotationAtMouse = _props.topAnnotationAtMouse;


    return React.createElement(
      Container,
      {
        style: this.props.style,
        innerRef: isMouseHovering.innerRef,
        onMouseLeave: this.onTargetMouseLeave
      },
      React.createElement(Img, {
        className: this.props.className,
        style: this.props.style,
        alt: this.props.alt,
        src: this.props.src,
        draggable: false,
        innerRef: this.setInnerRef
      }),
      React.createElement(
        Items,
        null,
        this.props.annotations.map(function (annotation) {
          return renderHighlight({
            key: annotation.data.id,
            annotation: annotation,
            active: _this2.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
          });
        }),
        !this.props.disableSelector && this.props.value && this.props.value.geometry && renderSelector({ annotation: this.props.value })
      ),
      React.createElement(Target, {
        onClick: this.onClick,
        onMouseUp: this.onMouseUp,
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onTargetMouseMove
      }),
      !this.props.disableOverlay && renderOverlay({
        type: this.props.type,
        annotation: this.props.value
      }),
      this.props.annotations.map(function (annotation) {
        return (
          /* this.shouldAnnotationBeActive(annotation, topAnnotationAtMouse)
          && ( */
          renderContent({
            key: annotation.data.id,
            annotation: annotation,
            imageZoomAmount: _this2.props.imageZoomAmount
          })
          // )

        );
      }),
      !this.props.disableEditor && this.props.value && this.props.value.selection && this.props.value.selection.showEditor && renderEditor({
        annotation: this.props.value,
        onChange: this.props.onChange,
        onSubmit: this.onSubmit,
        imageZoomAmount: this.props.imageZoomAmount
      }),
      this.props.value && this.props.value.geometry && this.props.value.geometry.type === PolygonSelector.TYPE && (!this.props.value.selection || !this.props.value.selection.showEditor) && renderPolygonControls({
        annotation: this.props.value,
        onSelectionComplete: this.onSelectionComplete,
        onSelectionClear: this.onSelectionClear,
        onSelectionUndo: this.onSelectionUndo,
        imageZoomAmount: this.props.imageZoomAmount
      })
    );
  };

  return Annotation;
}(Component);

Annotation.propTypes = process.env.NODE_ENV !== "production" ? {
  innerRef: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onClick: PropTypes.func,
  // This prop represents how zoom the image is (default: 1)
  imageZoomAmount: PropTypes.number,
  // This function is run before the onClick callback is executed (onClick
  // is only called if onClickCheckFunc resolve to true or doesn't exist)
  onClickCheckFunc: PropTypes.func,
  // For Polygon Selector
  onSelectionComplete: PropTypes.func,
  onSelectionClear: PropTypes.func,
  onSelectionUndo: PropTypes.func,

  annotations: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string
  })).isRequired,
  type: PropTypes.string,
  selectors: PropTypes.arrayOf(PropTypes.shape({
    TYPE: PropTypes.string,
    intersects: PropTypes.func.isRequired,
    area: PropTypes.func.isRequired,
    methods: PropTypes.object.isRequired
  })).isRequired,

  value: PropTypes.shape({
    selection: PropTypes.object,
    geometry: PropTypes.shape({
      type: PropTypes.string.isRequired
    }),
    data: PropTypes.object
  }),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,

  activeAnnotationComparator: PropTypes.func,
  activeAnnotations: PropTypes.arrayOf(PropTypes.any),

  disableAnnotation: PropTypes.bool,
  disableSelector: PropTypes.bool,
  renderSelector: PropTypes.func,
  disableEditor: PropTypes.bool,
  renderEditor: PropTypes.func,

  renderHighlight: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,

  disableOverlay: PropTypes.bool,
  renderOverlay: PropTypes.func.isRequired,
  renderPolygonControls: PropTypes.func.isRequired
} : {};

Annotation.defaultProps = defaultProps;

export default compose(isMouseHovering(), withRelativeMousePos())(Annotation);