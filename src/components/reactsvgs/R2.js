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

var SvgR2 = function SvgR2(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.116 2.57c-.973-.326-2.384-.546-3.991-.546-1.607 0-3.018.22-3.99.545-.492.164-.814.337-.992.478a.89.89 0 00-.082.072c.02.069.078.158.225.268.21.158.548.313 1.025.448.947.266 2.292.409 3.814.409 1.522 0 2.867-.143 3.814-.41.477-.134.816-.29 1.025-.447.147-.11.204-.2.225-.268a.884.884 0 00-.082-.072c-.178-.141-.5-.314-.991-.478zM4.02 4.818a5.18 5.18 0 01-.97-.369v1.757c0 .079.039.206.25.377.214.173.556.347 1.03.5.944.306 2.284.49 3.795.49 1.51 0 2.85-.184 3.794-.49.474-.153.817-.327 1.03-.5.212-.171.251-.298.251-.377V4.45a5.18 5.18 0 01-.97.369c-1.08.304-2.534.45-4.105.45-1.571 0-3.026-.146-4.105-.45zm10.23 1.388V3.05C14.25 1.917 11.508 1 8.125 1S2 1.917 2 3.049V12.95C2 14.083 4.742 15 8.125 15s6.125-.917 6.125-2.049V6.207zM13.2 7.654c-.28.157-.602.29-.95.403-1.083.35-2.543.54-4.125.54-1.582 0-3.042-.19-4.125-.54a5.258 5.258 0 01-.95-.403v1.712c0 .078.039.205.25.376.214.173.556.348 1.03.501.944.306 2.284.489 3.795.489 1.51 0 2.85-.183 3.794-.489.474-.153.817-.328 1.03-.5.212-.172.251-.299.251-.377V7.654zM4 11.215a5.253 5.253 0 01-.95-.403v2.058c.018.019.047.046.093.083.178.141.5.314.992.478.972.325 2.383.545 3.99.545 1.607 0 3.018-.22 3.99-.545.492-.164.814-.337.992-.478a.809.809 0 00.093-.083v-2.058a5.25 5.25 0 01-.95.403c-1.083.351-2.543.541-4.125.541-1.582 0-3.042-.19-4.125-.54zm9.224 1.624s0 .002-.004.006a.028.028 0 01.004-.006zm-10.198 0l.004.006a.024.024 0 01-.004-.006zm1.599-6.29c.29 0 .525-.23.525-.512a.519.519 0 00-.525-.513c-.29 0-.525.23-.525.513 0 .282.235.512.525.512zM5.15 9.28a.519.519 0 01-.525.513.519.519 0 01-.525-.513c0-.282.235-.512.525-.512.29 0 .525.23.525.512zm-.525 3.671c.29 0 .525-.23.525-.512a.519.519 0 00-.525-.512c-.29 0-.525.23-.525.512 0 .283.235.512.525.512z"
  }));
};

var _default = SvgR2;
exports.default = _default;