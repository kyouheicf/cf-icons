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

var SvgScript = function SvgScript(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.562 14.5v-.995c-1.15 0-1.506-.539-1.506-1.727V9.747c0-.828-.252-1.442-1.387-1.67v-.153c1.135-.229 1.387-.843 1.387-1.67V4.221c0-1.188.357-1.727 1.506-1.727V1.5c-1.942 0-2.576.853-2.576 2.722v1.625c0 1.112-.381 1.544-1.486 1.544v1.218c1.105 0 1.486.432 1.486 1.544v1.625c0 1.869.634 2.722 2.576 2.722zM10.438 1.5v.995c1.15 0 1.506.539 1.506 1.727v2.031c0 .828.252 1.442 1.387 1.67v.153c-1.134.229-1.387.843-1.387 1.67v2.032c0 1.188-.357 1.727-1.506 1.727v.995c1.942 0 2.576-.853 2.576-2.722v-1.625c0-1.112.381-1.544 1.486-1.544V7.391c-1.105 0-1.486-.432-1.486-1.544V4.222c0-1.869-.634-2.722-2.576-2.722z"
  }));
};

var _default = SvgScript;
exports.default = _default;