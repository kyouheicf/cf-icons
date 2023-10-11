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

var SvgPubSub = function SvgPubSub(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.328 5.24a6 6 0 0 1-.032 5.58c.114.213.215.42.3.619.185.432.304.838.327 1.195.023.356-.046.733-.321 1.008-.367.366-.907.37-1.383.266-.427-.092-.92-.293-1.456-.582a6 6 0 0 1-5.526 0c-.536.289-1.03.49-1.456.582-.374.081-.756.092-1.08-.057-.36-.166-.558-.485-.612-.856-.05-.346.02-.737.153-1.134.107-.32.263-.669.462-1.04a5.991 5.991 0 0 1-.589-3.992 6 6 0 0 1 .557-1.588c-.292-.541-.495-1.039-.588-1.468-.082-.374-.092-.757.057-1.08.166-.36.484-.558.856-.612.346-.05.736.02 1.134.153a6.85 6.85 0 0 1 1.052.468 6 6 0 0 1 5.634 0c.218-.117.429-.22.63-.306.432-.186.838-.304 1.196-.327.355-.023.732.046 1.007.321.366.367.37.906.266 1.383-.093.43-.296.926-.588 1.468ZM12.19 5.2a5.04 5.04 0 0 1-1.432 7.017 17.608 17.608 0 0 1-2.025-1.464A28.018 28.018 0 0 0 9.92 9.617v.783h.96V7.76H8.24v.96h1.213A27.542 27.542 0 0 1 8 10.121a27.041 27.041 0 0 1-1.094-1.035c-1.03-1.03-1.95-2.112-2.645-3.11a14.065 14.065 0 0 1-.48-.733 5.04 5.04 0 0 1 6.043-1.941 19.34 19.34 0 0 0-1.38 1.014 24.92 24.92 0 0 0-.924.779V4.16h-.96V6.8H9.2v-.96H8.127c.305-.271.612-.53.918-.775a16.902 16.902 0 0 1 1.762-1.25A5.04 5.04 0 0 1 12.191 5.2Zm-.445-1.887c.362.29.69.62.978.987a3.84 3.84 0 0 0 .254-.73c.084-.389 0-.494-.007-.501-.004-.004-.058-.056-.267-.042-.206.013-.498.088-.879.251a6.426 6.426 0 0 0-.079.035Zm-7.492 0a4.708 4.708 0 0 0-.428-.169c-.333-.111-.559-.132-.69-.113a.232.232 0 0 0-.099.031.069.069 0 0 0-.024.032c-.024.052-.053.192.009.476.045.208.13.453.254.73a6 6 0 0 1 .978-.987ZM3.278 6.24a5.04 5.04 0 0 0 1.963 5.978c.235-.142.483-.304.743-.486.416-.29.847-.619 1.282-.978a28.08 28.08 0 0 1-1.039-.988c-1.062-1.062-2.02-2.188-2.754-3.24a16.586 16.586 0 0 1-.195-.286Zm2.958 6.482a5.04 5.04 0 0 0 3.528 0A20.365 20.365 0 0 1 8 11.391a21.21 21.21 0 0 1-1.764 1.33Zm-1.94 0a6.003 6.003 0 0 1-.98-.971 4.69 4.69 0 0 0-.164.416c-.111.333-.132.558-.113.69a.23.23 0 0 0 .031.098.069.069 0 0 0 .032.025c.052.024.192.053.476-.009.205-.044.446-.128.719-.25Zm7.407 0c.278.124.518.206.72.249.388.084.493 0 .5-.007.004-.004.055-.058.042-.267-.013-.206-.088-.498-.251-.879a7.058 7.058 0 0 0-.03-.067 5.983 5.983 0 0 1-.98.97Z"
  }));
};

var _default = SvgPubSub;
exports.default = _default;