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

var SvgUserMulti = function SvgUserMulti(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.005 8.228a2.375 2.375 0 100-4.75 2.375 2.375 0 000 4.75zm0-3.749a1.375 1.375 0 110 2.75 1.375 1.375 0 010-2.75zM3.013 9.264a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm0-2.5a.75.75 0 110 1.499.75.75 0 010-1.498z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.504 9.525h-1.009c-.37 0-.737.083-1.072.244a3.486 3.486 0 00-2.667-1.242H7.244a3.486 3.486 0 00-2.663 1.238 2.487 2.487 0 00-1.068-.24H2.505A2.499 2.499 0 00.01 12.02l.5.5H15.5l.5-.5a2.499 2.499 0 00-2.495-2.495zm-10.999 1h1.008c.181 0 .36.035.53.1-.124.286-.21.587-.253.895H1.095a1.498 1.498 0 011.41-.995zm2.295.996a2.498 2.498 0 012.444-1.994h1.512a2.498 2.498 0 012.444 1.994H4.8zm7.41 0a3.452 3.452 0 00-.252-.893c.171-.067.354-.102.537-.103h1.009a1.498 1.498 0 011.41.996H12.21z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.003 9.264a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm0-2.5a.75.75 0 110 1.498.75.75 0 010-1.497z"
  }));
};

var _default = SvgUserMulti;
exports.default = _default;