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

var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.368 5.197c.008.121.008.243.008.365 0 3.724-2.786 8.02-7.88 8.02v-.003a7.743 7.743 0 01-4.246-1.263 5.5 5.5 0 004.1-1.168A2.78 2.78 0 012.761 9.19c.415.082.842.065 1.25-.048C2.72 8.876 1.79 7.72 1.79 6.379v-.036c.385.218.816.34 1.257.353-1.217-.828-1.592-2.475-.857-3.764a7.816 7.816 0 005.708 2.945A2.852 2.852 0 018.7 3.184a2.739 2.739 0 013.918.122 5.5 5.5 0 001.76-.684 2.821 2.821 0 01-1.219 1.559 5.434 5.434 0 001.591-.444 5.682 5.682 0 01-1.382 1.46z"
  }));
};

var _default = SvgTwitter;
exports.default = _default;