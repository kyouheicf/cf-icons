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

var SvgDiscord = function SvgDiscord(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.082 8.44c0-.414.305-.753.691-.753.386 0 .698.339.691.752 0 .414-.305.753-.691.753-.38 0-.691-.34-.691-.753zM8.556 8.44c0-.414.305-.753.691-.753.386 0 .691.339.691.752 0 .414-.305.753-.691.753-.38 0-.691-.34-.691-.753z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.458 2h9.083c.766 0 1.39.624 1.39 1.396v12.16l-1.457-1.287-.82-.76-.868-.806.359 1.254H3.458c-.766 0-1.39-.624-1.39-1.397V3.396c0-.772.624-1.396 1.39-1.396zm6.02 8.303c.203.258.447.55.447.55 1.498-.048 2.074-1.03 2.074-1.03 0-2.184-.976-3.953-.976-3.953-.976-.732-1.905-.711-1.905-.711l-.095.108c1.153.353 1.688.86 1.688.86a5.525 5.525 0 00-3.41-.636.57.57 0 00-.115.013c-.237.02-.813.109-1.538.427-.251.116-.4.197-.4.197s.562-.536 1.783-.888l-.068-.081s-.929-.02-1.905.711c0 0-.976 1.77-.976 3.952 0 0 .57.983 2.067 1.03 0 0 .251-.305.455-.562-.861-.258-1.187-.8-1.187-.8s.068.047.19.115a.272.272 0 00.058.037c.01.006.02.01.03.017.17.095.34.17.495.23.278.11.61.218.996.292a4.748 4.748 0 001.756.007 4.46 4.46 0 00.983-.291 3.88 3.88 0 00.78-.4s-.34.556-1.228.806z"
  }));
};

var _default = SvgDiscord;
exports.default = _default;