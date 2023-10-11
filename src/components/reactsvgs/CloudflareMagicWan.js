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

var SvgCloudflareMagicWan = function SvgCloudflareMagicWan(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 7.473h-4.284l3.95-1.645-.412-.998-3.965 1.64 3.034-3.043-.762-.763L9.54 5.693l1.642-3.951-.996-.416-1.648 3.97V1H7.462v4.277L5.846 1.321l-.996.413 1.637 3.972-3.048-3.04-.762.761 3.021 3.029-3.944-1.642-.415.995 3.969 1.664H1v1.079h4.283l-3.95 1.618.413.998 3.966-1.64-3.035 3.04.762.763 3.021-3.026-1.642 3.95.996.416 1.648-3.962V15h1.076v-4.29l1.616 3.956.996-.41-1.623-3.965 3.034 3.04.762-.764-3.021-3.026 3.944 1.646.415-.998-3.969-1.637H15v-1.08zm-4.308 0v1.079l-.409.992-.756.758-.989.39H7.462l-.989-.409-.756-.758-.41-.992v-1.06l.41-.993.756-.758.989-.407h1.076l.989.41.756.758.41.99z"
  }));
};

var _default = SvgCloudflareMagicWan;
exports.default = _default;