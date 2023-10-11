"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilter = function SvgFilter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#filter_svg__clip0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.38 14.595l-.018-2.475-.73.005.02 2.502-.65-.625-.505.525 1.535 1.48 1.48-1.537-.525-.505-.607.63zM4.25 1.612a.75.75 0 100-1.5.75.75 0 000 1.5zM6.75 1.612a.75.75 0 100-1.5.75.75 0 000 1.5zM9.25 1.612a.75.75 0 100-1.5.75.75 0 000 1.5zM11.75 1.612a.75.75 0 100-1.5.75.75 0 000 1.5zM5.55 3.995a.75.75 0 100-1.5.75.75 0 000 1.5zM8.05 3.995a.75.75 0 100-1.5.75.75 0 000 1.5zM10.55 3.995a.75.75 0 100-1.5.75.75 0 000 1.5zM6.725 11.123l.5.5h1.55l.5-.5v-2.75l3.55-3.123-.325-.865h-9l-.325.865 3.55 3.112v2.76zm-1.918-5.75h6.38L8.437 7.77l-.17.372v2.5H7.71v-2.5l-.168-.37-2.735-2.4z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "filter_svg__clip0"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};

var _default = SvgFilter;
exports.default = _default;