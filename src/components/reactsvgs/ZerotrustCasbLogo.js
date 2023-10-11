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

var SvgZerotrustCasbLogo = function SvgZerotrustCasbLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.718 2.374a2.344 2.344 0 0 0-2.344 2.344v2.146l-.607-.603-.661.665 1.747 1.737 1.729-1.739-.665-.661-.605.609V4.718c0-.777.63-1.406 1.406-1.406h6.564c.777 0 1.406.63 1.406 1.406V5.89h.938V4.718a2.344 2.344 0 0 0-2.344-2.344H4.718ZM12.688 8.66v2.622c0 .777-.63 1.406-1.406 1.406H4.718c-.777 0-1.406-.63-1.406-1.406V9.656h-.938v1.626a2.344 2.344 0 0 0 2.344 2.344h6.564a2.344 2.344 0 0 0 2.344-2.344V8.667l.607.603.661-.665-1.747-1.737-1.729 1.74.665.66.605-.609Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5.042 8.234.801-.773 1.543 1.61 3.249-3.277.792.783-4.041 4.098-2.344-2.44Z"
  }));
};

var _default = SvgZerotrustCasbLogo;
exports.default = _default;