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

var SvgD1 = function SvgD1(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "m2.207 2.381 1.687-1.284L4.21 1h7.604l.313.102 1.736 1.285.215.423v9.98l-.145.362-1.268 1.343-.384.165H3.967l-.36-.142-1.439-1.342L2 12.79V2.81l.207-.429Zm.844 6.674 1.174 1.298h.014v1.05h-.48l-.708-.788v1.941l1.118 1.05h7.88l.972-1.026v-2.028l-.964.851H7.16v-1.05h4.505l1.363-1.211V7.188l-.964.853H7.16v-1.05h4.505l1.363-1.208V3.965l-.964.856H3.77l-.72-.735v1.607l1.175 1.298h.014v1.05h-.48l-.708-.788v1.802Zm8.59-7.004H4.388l-1.069.816.893.914h7.454l1.05-.935-1.073-.795Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.7 8.452a.788.788 0 1 1 0 1.576.788.788 0 0 1 0-1.576Zm-.93 3.858.93-.929.928.929-.929.928-.928-.928Zm.93-7.05.796.46v.92l-.797.46-.796-.46v-.92l.796-.46Z"
  }));
};

var _default = SvgD1;
exports.default = _default;