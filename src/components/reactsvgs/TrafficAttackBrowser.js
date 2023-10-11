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

var SvgTrafficAttackBrowser = function SvgTrafficAttackBrowser(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.51 21.45a2.09 2.09 0 1 0 0-4.18 2.09 2.09 0 0 0 0 4.18Zm6.69 0a2.09 2.09 0 1 0 0-4.18 2.09 2.09 0 0 0 0 4.18Zm6.7 0a2.09 2.09 0 1 0 0-4.18 2.09 2.09 0 0 0 0 4.18Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56 11.92H8l-2 2v39.87l2 2h48l2-2V13.92l-2-2Zm-2 4v6.88H10v-6.88h44ZM10 51.79v-25h44v25H10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m41.35 31.8-2.85-2.81-6.5 6.58-6.58-6.51-2.81 2.85 6.58 6.5-6.51 6.58 2.84 2.81 6.51-6.57 6.58 6.5 2.81-2.84-6.58-6.51 6.51-6.58Z"
  }));
};

var _default = SvgTrafficAttackBrowser;
exports.default = _default;