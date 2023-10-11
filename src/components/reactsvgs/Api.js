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

var SvgApi = function SvgApi(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54 8H10l-2 2v44l2 2h44l2-2V10l-2-2Zm-2 44H12V12h40v40Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.62 36.5h5.55l1.14 3.5h3.48l-5.3-15.37h-4.18L14 40h3.48l1.14-3.5Zm2.72-8.35h.12l1.89 5.81h-3.9l1.89-5.81ZM33.68 35.02h2.73c1.04.03 2.08-.2 3.02-.66.8-.4 1.47-1.04 1.91-1.82a5.4 5.4 0 0 0 .66-2.7c.02-.94-.2-1.87-.65-2.7a4.58 4.58 0 0 0-1.88-1.84 6.19 6.19 0 0 0-2.98-.66h-6.06V40h3.25v-4.98Zm0-7.73h2.19a3.4 3.4 0 0 1 1.56.32c.4.2.71.5.92.9a3.11 3.11 0 0 1 0 2.67c-.2.39-.52.7-.92.9-.48.24-1.01.35-1.55.33h-2.2V27.3ZM48 24.63h-3.25V40H48V24.63Z"
  }));
};

var _default = SvgApi;
exports.default = _default;