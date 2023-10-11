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

var SvgDrive = function SvgDrive(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.375 7.409a.523.523 0 100-1.046.523.523 0 000 1.046z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.863 2.183L4.25 2h7.5l.387.183 2.25 2.75.113.317v.14l.002.002v3.213l-.5.5H2l-.5-.5V5.25l.113-.317 2.25-2.75zM2.5 5.892v2.213h11.002V6.25H13.5v-.358h-11zm10.56-1H2.94L4.486 3h7.026l1.548 1.892z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.375 12.303a.523.523 0 100-1.047.523.523 0 000 1.046z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 9.785l-.5.5v3.213l.5.5h12.002l.5-.5v-3.213l-.5-.5H2zm.5 3.213v-2.213h11.002v2.213H2.5z"
  }));
};

var _default = SvgDrive;
exports.default = _default;