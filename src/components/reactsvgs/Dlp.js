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

var SvgDlp = function SvgDlp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m1.5 1.75.5-.5h9.982l.5.5v3.014a2.982 2.982 0 0 0-1-.255V2.25H2.5v10.495h4v1H2l-.5-.5V1.75Zm8.968 2.745H3.49v-1h6.978v1ZM3.49 6.512h3.948v-1H3.49v1Zm3.948 1.983H3.49v-1h3.948v1Zm3.995 4.85v-1.17a.813.813 0 0 0 .363-.875.811.811 0 0 0-.796-.626.818.818 0 0 0-.796.626.808.808 0 0 0 .363.875v1.17h.866Zm2.76-4.129.432.429v4.801l-.431.429H7.806l-.431-.429V9.645l.431-.429h.78v-1.44c0-.637.255-1.248.708-1.698a2.42 2.42 0 0 1 3.412 0c.453.45.708 1.061.708 1.698v1.44h.78ZM9.977 6.759c-.271.27-.424.636-.424 1.017v1.44h2.896v-1.44c0-.381-.152-.747-.424-1.017a1.452 1.452 0 0 0-2.048 0Zm-1.635 7.154v-3.735h5.318v3.735H8.341Z"
  }));
};

var _default = SvgDlp;
exports.default = _default;