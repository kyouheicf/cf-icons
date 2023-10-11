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

var SvgWeb3 = function SvgWeb3(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.563 10.633a.712.712 0 1 0 1.232.712.712.712 0 0 0-1.232-.712ZM8 1.5a.712.712 0 1 0 0 1.423A.712.712 0 0 0 8 1.5ZM6.894 3.321l-.5-.866-3.81 2.2-.25.432v4.389h1V5.953l.87.502.5-.866-.87-.502 3.06-1.766ZM3.941 9.852l.5.866 3.073-1.774v2.124h1V8.944l3.045 1.758.5-.866-3.045-1.758 1.84-1.062-.5-.866-1.84 1.062V3.654h-1v3.558L5.674 6.15l-.5.866 1.84 1.062-3.073 1.774Zm.478 1.553-.5.866 3.845 2.22h.5l3.817-2.204-.5-.866-3.067 1.771V12.19h-1v1.003L4.42 11.405Zm9.274-6.318V9.47h-1V5.953l-.868.502-.5-.866.868-.502-3.08-1.778.5-.867 3.83 2.212.25.433ZM3.436 10.672a.712.712 0 1 0-1.233.712.712.712 0 0 0 1.233-.712Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "web3_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h16v16H0z"
  }))));
};

var _default = SvgWeb3;
exports.default = _default;