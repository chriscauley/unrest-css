"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CSS = _interopRequireDefault(require("./CSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _CSS["default"])({
  outer: 'card',
  body: 'card-body',
  title: 'card-title',
  subtitle: 'card-subtitle',
  text: 'card-text',
  link: 'card-link'
});

exports["default"] = _default;