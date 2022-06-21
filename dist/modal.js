"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CSS = _interopRequireDefault(require("./CSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modal = (0, _CSS["default"])({
  outer: 'modal',
  mask: 'modal__mask'
});
modal.content = (0, _CSS["default"])({
  __base: 'modal__content',
  __default: 'lg',
  fullscreen: '',
  xs: 'max-w-xs w-11/12',
  sm: 'max-w-sm w-11/12',
  md: 'max-w-md w-11/12',
  lg: 'max-w-lg w-11/12',
  xl: 'max-w-xl w-11/12'
});
var _default = modal;
exports["default"] = _default;