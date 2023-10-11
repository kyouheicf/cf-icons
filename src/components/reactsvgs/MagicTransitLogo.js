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

var SvgMagicTransitLogo = function SvgMagicTransitLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.75 9.116l-1.83-.991 1.69-.914.14-.078-.509-.892-1.775 1.085.049-2.076h-1.03l.05 2.076-1.776-1.085-.509.894 1.83.99-1.83.991.509.893 1.775-1.085L7.485 11h1.03l-.05-2.076 1.776 1.085.509-.893z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.372 1.164h-.745l-.287.322a6.896 6.896 0 01-3.852 1.91l-.343.05-.428.495v3.535c0 2.463 1.19 4.292 2.375 5.498 1.181 1.204 2.386 1.822 2.507 1.882l.177.09h.447l.18-.09c.119-.06 1.324-.677 2.506-1.882 1.184-1.206 2.375-3.035 2.375-5.498V3.942l-.428-.495-.343-.05a6.897 6.897 0 01-3.852-1.911l-.289-.322zM3.717 4.373A7.896 7.896 0 008 2.239a7.896 7.896 0 004.284 2.135v3.102c0 2.115-1.018 3.706-2.089 4.798A9.442 9.442 0 018 13.938a9.441 9.441 0 01-2.194-1.664C4.735 11.182 3.717 9.59 3.717 7.476V4.373z"
  }));
};

var _default = SvgMagicTransitLogo;
exports.default = _default;