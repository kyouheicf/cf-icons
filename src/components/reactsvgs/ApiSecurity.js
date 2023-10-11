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

var SvgApiSecurity = function SvgApiSecurity(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.098 5.183a.891.891 0 00-.3.405c-.075.214-.11.44-.102.668v.614a.765.765 0 01-.163.546.783.783 0 01-.573.168v.81a.782.782 0 01.573.168c.123.154.18.35.163.545v.613a1.84 1.84 0 00.102.667.889.889 0 00.3.405c.144.102.309.17.482.2.213.04.43.06.646.057v-.666a.957.957 0 01-.436-.08.42.42 0 01-.208-.24 1.267 1.267 0 01-.057-.413v-.791a.946.946 0 00-.063-.345.642.642 0 00-.229-.283 1.275 1.275 0 00-.492-.194c-.006 0-.012-.002-.017-.003v-.09a.488.488 0 01.017-.004c.007 0 .013-.002.019-.003.169-.03.33-.096.473-.19a.64.64 0 00.23-.284.953.953 0 00.062-.347v-.791c-.004-.14.015-.279.057-.412a.415.415 0 01.208-.24.973.973 0 01.436-.078v-.67a3.33 3.33 0 00-.646.057c-.173.03-.338.099-.482.2zM10.304 6.87a.765.765 0 00.163.546c.161.13.367.19.572.168v.81a.782.782 0 00-.572.168.764.764 0 00-.163.546v.612c.007.227-.027.454-.102.668a.889.889 0 01-.3.405c-.144.101-.309.17-.482.2-.213.04-.43.06-.647.057v-.667c.15.008.3-.02.437-.08a.42.42 0 00.208-.24c.042-.134.061-.273.057-.413V8.86c0-.118.02-.235.063-.345a.64.64 0 01.229-.283c.143-.095.304-.16.473-.19l.021-.004.014-.003v-.09l-.017-.004-.018-.003a1.278 1.278 0 01-.473-.19.64.64 0 01-.23-.284.953.953 0 01-.062-.347v-.79a1.267 1.267 0 00-.057-.412.415.415 0 00-.208-.24.973.973 0 00-.437-.078v-.67a3.33 3.33 0 01.647.057c.173.03.338.098.482.2a.892.892 0 01.3.405c.075.214.11.44.102.668v.614z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.627 1.165h.745l.289.32a6.896 6.896 0 003.852 1.912l.343.05.428.495v3.534c0 2.463-1.191 4.292-2.375 5.498-1.182 1.205-2.387 1.823-2.507 1.882l-.179.09h-.447l-.177-.09c-.12-.06-1.326-.678-2.507-1.882-1.184-1.206-2.375-3.035-2.375-5.498V3.941l.428-.495.343-.05a6.896 6.896 0 003.852-1.91l.287-.321zM8 2.239a7.896 7.896 0 01-4.283 2.134v3.103c0 2.115 1.018 3.706 2.089 4.798A9.438 9.438 0 008 13.938a9.437 9.437 0 002.195-1.664c1.071-1.092 2.089-2.683 2.089-4.798V4.374A7.897 7.897 0 018 2.239z"
  }));
};

var _default = SvgApiSecurity;
exports.default = _default;