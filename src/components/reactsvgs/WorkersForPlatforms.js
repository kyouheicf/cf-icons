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

var SvgWorkersForPlatforms = function SvgWorkersForPlatforms(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "aria-hidden": !props['aria-label'],
    focusable: "false"
  }), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m8.464 1.447 6.484 3.643.002.505.003.002v4.996l-.494.812-5.731 3.277v.025h-1.44v-.016l-5.766-3.298-.475-.8V5.597l.002-.001.004-.507L7.59 1.447h.875ZM2.32 5.513 7.101 8.25l.898.507 1.022-.577 4.66-2.665L7.999 2.31l-5.68 3.204Zm8.09 2.985L8.483 9.6v4.11l5.504-3.148V6.458l-3.578 2.04ZM2.013 6.466l5.504 3.18v4.064l-5.504-3.148V6.466Zm4.852-2.244c0 .342.464.62 1.037.62s1.037-.278 1.037-.62v-.409c0-.342-.464-.62-1.037-.62s-1.037.278-1.037.62v.409Zm0 2.694c0 .343.464.621 1.037.621s1.037-.278 1.037-.62v-.409c0-.343-.464-.62-1.037-.62s-1.037.277-1.037.62v.408Zm2.597-1.453v-.408c0-.343.464-.621 1.037-.621s1.037.278 1.037.62v.409c0 .343-.464.62-1.037.62s-1.037-.277-1.037-.62Zm-5.193 0c0 .343.464.62 1.037.62.572 0 1.037-.277 1.037-.62v-.408c0-.343-.465-.621-1.037-.621-.573 0-1.037.278-1.037.62v.409Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.477 1.4 6.518 3.662.002.506.003.002v5.037l-.508.833-5.717 3.27v.044H7.24v-.035l-5.753-3.291L1 10.606V5.57l.003-.001.003-.508L7.576 1.4h.9Zm-1.15 13.26H8.68v-.005l5.744-3.285.481-.79V5.624l-.003-.001-.001-.506-6.45-3.623H7.6L1.1 5.117l-.004.506-.002.001v4.956l.462.779 5.77 3.3Zm.672-12.405 5.776 3.259-4.73 2.706h-.001l-1.045.59-.921-.52-4.854-2.777 5.775-3.258ZM2.414 5.514l4.71 2.694.875.494.999-.563 4.587-2.625L8 2.363l-5.585 3.15Zm4.779-2.1c-.18.109-.281.251-.281.4v.408c0 .148.1.29.28.398.18.107.43.175.71.175.28 0 .53-.068.709-.175.18-.108.28-.25.28-.398v-.409c0-.148-.1-.29-.28-.398a1.405 1.405 0 0 0-.71-.175 1.4 1.4 0 0 0-.708.175Zm-.049-.08c.197-.117.464-.188.758-.188.293 0 .561.07.757.188.195.117.327.285.327.48v.408c0 .194-.132.362-.327.479a1.498 1.498 0 0 1-.757.188c-.294 0-.561-.07-.758-.188-.195-.117-.326-.285-.326-.48v-.408c0-.194.131-.362.326-.479ZM4.596 4.656c-.18.108-.28.25-.28.399v.408c0 .148.1.29.28.398.18.108.43.175.71.175.279 0 .53-.067.709-.175.18-.107.28-.25.28-.398v-.408c0-.149-.1-.291-.28-.399a1.405 1.405 0 0 0-.71-.175c-.279 0-.53.068-.709.175Zm-.048-.08c.196-.118.464-.189.758-.189.293 0 .56.071.757.188.195.117.327.285.327.48v.408c0 .194-.132.362-.327.479a1.498 1.498 0 0 1-.757.188c-.294 0-.562-.07-.758-.188-.195-.117-.326-.285-.326-.48v-.407c0-.195.13-.363.326-.48Zm5.194 0c.196-.118.464-.189.757-.189s.561.071.757.188c.18.108.305.258.324.433h.003v.455c0 .194-.131.362-.326.479a1.499 1.499 0 0 1-.758.188 1.49 1.49 0 0 1-.757-.188c-.196-.117-.327-.285-.327-.48v-.406c0-.195.131-.363.327-.48Zm1.747.479c0-.149-.1-.291-.28-.399a1.405 1.405 0 0 0-.71-.175c-.28 0-.53.068-.71.175-.18.108-.28.25-.28.398v.409c0 .148.1.29.28.398.18.108.43.175.71.175.28 0 .53-.067.71-.175.18-.107.28-.25.28-.398v-.408ZM7.193 6.11c-.18.107-.281.25-.281.398v.408c0 .149.1.291.28.399.18.107.43.175.71.175.28 0 .53-.068.709-.175.18-.108.28-.25.28-.399v-.408c0-.148-.1-.29-.28-.398a1.405 1.405 0 0 0-.71-.176c-.279 0-.53.068-.708.176Zm-.049-.081c.197-.117.464-.188.758-.188.293 0 .561.07.757.188.195.117.327.285.327.48v.407c0 .195-.132.363-.327.48a1.498 1.498 0 0 1-.757.188c-.294 0-.561-.071-.758-.188-.195-.117-.326-.285-.326-.48v-.408c0-.194.131-.362.326-.479Zm6.89.349v4.211l-5.598 3.202V9.572l1.95-1.115 3.648-2.08Zm-12.068.006L7.564 9.62v4.172L1.966 10.59V6.384Zm8.467 2.154L8.53 9.627v4.002l5.41-3.095V6.54l-3.507 2ZM2.06 6.548v3.986l5.41 3.095V9.673L2.06 6.547Z"
  })));
};

var _default = SvgWorkersForPlatforms;
exports.default = _default;