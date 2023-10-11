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

var SvgWorkersConstellation = function SvgWorkersConstellation(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.72 1.5H9.265v3.198l1.455.004V1.5ZM7.36 3.347l1.516 1.517-1.032 1.025-1.513-1.513 1.03-1.029ZM4.485 6.28h3.202l-.005 1.455H4.485V6.28Zm1.848 3.36 1.515-1.516 1.026 1.032-1.512 1.512-1.03-1.029Zm2.932 2.875V9.313l1.455.005v3.197H9.265Zm3.36-1.845-1.517-1.517 1.032-1.026 1.514 1.514-1.03 1.029ZM15.5 7.735h-3.202l.005-1.455H15.5v1.455Zm-1.847-3.359-1.516 1.516-1.025-1.032 1.513-1.513 1.028 1.03ZM2 1.829v.82h-.822v1.315H2v.821h1.314v-.82h.821V2.65h-.821v-.821H2Zm0 12.842v-1.5H.5v-1.314H2v-1.499h1.314v1.499h1.5v1.314h-1.5v1.5H2Z"
  }));
};

var _default = SvgWorkersConstellation;
exports.default = _default;