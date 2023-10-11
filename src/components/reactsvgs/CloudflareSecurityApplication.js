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

var SvgCloudflareSecurityApplication = function SvgCloudflareSecurityApplication(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.628 1.11h.745l.288.32a6.896 6.896 0 0 0 3.853 1.912l.343.05.427.495v3.534c0 2.463-1.19 4.292-2.375 5.498-1.181 1.205-2.387 1.823-2.506 1.882l-.18.09h-.446l-.178-.09a7.958 7.958 0 0 1-.788-.467 4.438 4.438 0 0 0 1.18-.456l.01.006a9.44 9.44 0 0 0 2.195-1.665c1.07-1.091 2.088-2.682 2.088-4.798V4.32a7.897 7.897 0 0 1-4.283-2.135 7.897 7.897 0 0 1-4.283 2.134v1.713a4.48 4.48 0 0 0-1 .722V3.886l.427-.495.343-.05a6.896 6.896 0 0 0 3.853-1.91l.287-.321Zm-5.357 9.593.881-.174c.071.356.211.688.406.98l-.746.499c.264.395.604.734.999.999l.5-.746c.291.195.622.335.979.405l-.175.881a3.637 3.637 0 0 0 1.413 0l-.174-.88c.356-.071.688-.211.98-.406l.499.746a3.64 3.64 0 0 0 .998-1l-.746-.499c.195-.291.336-.623.406-.979l.881.174a3.637 3.637 0 0 0 0-1.412l-.88.174a2.706 2.706 0 0 0-.407-.98l.746-.499a3.64 3.64 0 0 0-.998-.999l-.5.746a2.706 2.706 0 0 0-.98-.405l.175-.881a3.637 3.637 0 0 0-1.413 0l.175.88a2.716 2.716 0 0 0-.98.406l-.5-.746a3.64 3.64 0 0 0-.998 1l.746.499a2.706 2.706 0 0 0-.406.979l-.88-.174a3.637 3.637 0 0 0 0 1.412Zm3.55 1.002a1.708 1.708 0 1 1 0-3.416 1.708 1.708 0 0 1 0 3.416Z"
  }));
};

var _default = SvgCloudflareSecurityApplication;
exports.default = _default;