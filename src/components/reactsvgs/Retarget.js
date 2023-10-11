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

var SvgRetarget = function SvgRetarget(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.99 9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.14 7.5h-.66A6.5 6.5 0 008.5 1.515V.86h-1v.655A6.5 6.5 0 001.52 7.5H.86v1h.662A6.5 6.5 0 007.5 14.473v.667h1v-.668A6.5 6.5 0 0014.477 8.5h.663v-1zm-1.663 0H12.21A4.25 4.25 0 008.5 3.777v-1.25A5.5 5.5 0 0113.477 7.5zm-2.28 1A3.25 3.25 0 018.5 11.2v-.675h-1v.68A3.25 3.25 0 014.782 8.5h.693v-1h-.693A3.25 3.25 0 017.5 4.785v.69h1V4.79a3.25 3.25 0 012.697 2.71h-.672v1h.672zM7.5 2.518v1.25A4.25 4.25 0 003.772 7.5h-1.25A5.5 5.5 0 017.5 2.518zM2.525 8.5h1.25A4.25 4.25 0 007.5 12.215v1.25A5.5 5.5 0 012.525 8.5zM8.5 13.47v-1.25a4.25 4.25 0 003.707-3.72h1.268A5.5 5.5 0 018.5 13.47z"
  }));
};

var _default = SvgRetarget;
exports.default = _default;