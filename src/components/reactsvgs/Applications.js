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

var SvgApplications = function SvgApplications(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.915 3.508a.419.419 0 100-.838.419.419 0 000 .838zM7.255 3.508a.419.419 0 100-.838.419.419 0 000 .838zM8.596 3.508a.419.419 0 100-.838.419.419 0 000 .838z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.223 1.5H4.615l-.5.5v2.378H3.19l-.5.5v1.408h-.913l-.5.5v7.213l.5.5h8.684l.5-.5v-1.408h.915l.5-.5v-1.609h1.847l.5-.5V2.001l-.5-.5zm-.5 1V3.68H5.115V2.5h8.608zM4.115 5.379v.968H3.69v-.968h.425zM2.69 7.286v.968h-.413v-.968h.413zm7.27 6.213H2.278V9.254h.415v2.838l.5.5H9.96v.907zm1.415-1.908H3.693V7.348h.425v2.635l.5.5h6.759v1.11zm-6.26-2.109V4.679h8.608v4.803H5.115z"
  }));
};

var _default = SvgApplications;
exports.default = _default;