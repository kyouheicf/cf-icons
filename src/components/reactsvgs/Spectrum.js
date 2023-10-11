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

var SvgSpectrum = function SvgSpectrum(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.222 14.947h-.445l-.18-.09c-.197-.1-4.88-2.5-4.88-7.38V3.942l.43-.5L3.5 3.4a6.98 6.98 0 003.832-1.9l.295-.33h.75l.293.33a6.955 6.955 0 003.842 1.9l.34.047.43.5v3.53c0 4.886-4.682 7.273-4.88 7.38l-.18.09zm-4.5-10.572v3.102c0 4.085 3.795 6.208 4.283 6.463.5-.25 4.282-2.377 4.282-6.463V4.375A8 8 0 018 2.25a8 8 0 01-4.283 2.125h.005z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 4.755h-1V6.96h1V4.755z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.94 5.352L8.38 6.91l.708.707 1.559-1.56-.707-.706z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.245 7.5H9.04v1h2.205v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 8.38l-.707.706 1.56 1.56.706-.708L9.09 8.38z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 9.04h-1v2.205h1V9.04z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.912 8.382L5.353 9.94l.707.707L7.62 9.09l-.708-.707z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.96 7.5H4.755v1H6.96v-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.058 5.352l-.708.707 1.56 1.56.707-.708-1.56-1.56z"
  }));
};

var _default = SvgSpectrum;
exports.default = _default;