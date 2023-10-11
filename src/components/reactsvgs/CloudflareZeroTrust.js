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

var SvgCloudflareZeroTrust = function SvgCloudflareZeroTrust(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "0 0 64 64",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30.29 40.55L33.12 43.38L43.61 32.89L33.12 22.41L30.29 25.24L35.95 30.89H6.01001V34.89H35.95L30.29 40.55Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51.43 13.78L50.06 13.59C44.2675 12.7343 38.8907 10.0791 34.69 6.00003L33.5 4.66003H30.5L29.34 6.00003C25.1513 10.0791 19.7839 12.7348 14 13.59L12.63 13.78L10.91 15.78V27H14.91V17.5C21.3366 16.4645 27.2966 13.5001 32 9.00003C36.7215 13.5083 42.7031 16.473 49.15 17.5V29.9C49.15 46.26 34 54.73 32 55.75C30.47 55 20.58 49.43 16.57 39H12.33C16.74 52.43 29.75 59.09 30.41 59.42L31.12 59.78H32.91L33.62 59.42C34.42 59.03 53.15 49.42 53.15 29.9V15.76L51.43 13.78Z"
  }));
};

var _default = SvgCloudflareZeroTrust;
exports.default = _default;