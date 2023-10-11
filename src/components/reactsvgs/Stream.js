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

var SvgStream = function SvgStream(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.967 7.544a2.932 2.932 0 00-2-.68 4.825 4.825 0 00-9.25-1.148 3.408 3.408 0 00-2.417.798A3.65 3.65 0 000 9.264a3.56 3.56 0 003.545 3.563h9.47a3 3 0 001.952-5.283zm-1.952 4.282H3.547A2.56 2.56 0 011 9.271a2.645 2.645 0 01.942-2A2.388 2.388 0 013.5 6.71c.16 0 .318.014.475.042l.435.078.127-.423A3.823 3.823 0 0112 7.421l.025.58.565-.09a2.06 2.06 0 011.728.405A2.025 2.025 0 0115 9.841a2 2 0 01-1.985 1.986z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.43 6.223l.755-.43 3.771 2.234.001.86-3.771 2.243-.756-.43V6.223zm1 .877v2.72l2.292-1.362L7.43 7.1z"
  }));
};

var _default = SvgStream;
exports.default = _default;