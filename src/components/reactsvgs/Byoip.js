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

var SvgByoip = function SvgByoip(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M.5 2.24l-.5.5v10.5l.5.5h10l.5-.5v-2.902h-1v2.401H1v-9.5h9v2.402h1V2.739l-.5-.5H.5zM14.025 7.49l-1.122-1.1.7-.714 2.361 2.313-2.36 2.314-.7-.714 1.121-1.1H12v-1h2.025z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8.016a.57.57 0 101.14 0 .57.57 0 00-1.14 0zM10.482 8.585a.57.57 0 110-1.14.57.57 0 010 1.14zM3.25 6.171h-.807V9.99h.807V6.171z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.25 9.99h.807V8.75h.679c.878 0 1.389-.523 1.389-1.286 0-.759-.502-1.294-1.369-1.294H4.25V9.99zm.807-1.886V6.831h.545c.466 0 .691.254.691.634 0 .378-.225.64-.688.64h-.548z"
  }));
};

var _default = SvgByoip;
exports.default = _default;