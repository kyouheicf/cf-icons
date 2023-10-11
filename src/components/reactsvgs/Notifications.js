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

var SvgNotifications = function SvgNotifications(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.35 2.861a3.681 3.681 0 00-1.42-.614l.196-.98a4.682 4.682 0 013.531 6.057l-.95-.313a3.682 3.682 0 00-1.357-4.15z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.17 1.63l.88-.028 4.626 8.01-.465.75-5.246-.339-.302.174L8.31 13.05l-.183.683-1.732 1-.683-.183-1.647-2.853-.65.375-.683-.183-1.625-2.814.183-.683 3.55-2.05L7.17 1.63zM6.163 9.331L5.038 7.383 2.223 9.008l1.125 1.948 2.815-1.625zM4.93 11.197l1.397 2.42.866-.5-1.397-2.42-.866.5zm6.412-1.894l-4.198-.27L5.788 6.68l1.864-3.77 3.69 6.392z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.763 3.67a2.678 2.678 0 00-1.007-.437l-.202.979a1.678 1.678 0 011.271 2.116l.96.281a2.678 2.678 0 00-1.022-2.938z"
  }));
};

var _default = SvgNotifications;
exports.default = _default;