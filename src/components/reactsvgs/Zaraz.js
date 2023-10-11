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

var SvgZaraz = function SvgZaraz(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1 3.5 L 6.5 3.5 L 6.5 2.5 L 1 2.5 Z M 1 3.5 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 1 5.5 L 6.5 5.5 L 6.5 4.5 L 1 4.5 Z M 1 5.5 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 10 9.5 L 6.5 9.5 L 6.5 8.5 L 10 8.5 Z M 10 9.5 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.5 7.5 L 10 7.5 L 10 6.5 L 6.5 6.5 Z M 6.5 7.5 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 15 13.5 L 6.5 13.5 L 6.5 12.5 L 15 12.5 Z M 15 13.5 "
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 6.5 11.5 L 15 11.5 L 15 10.5 L 6.5 10.5 Z M 6.5 11.5 "
  }));
};

var _default = SvgZaraz;
exports.default = _default;