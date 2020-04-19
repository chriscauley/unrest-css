"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CSS = _interopRequireDefault(require("./CSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var base = 'font-bold ';

var _default = (0, _CSS["default"])({
  h1: base + 'text-4xl my-4 ',
  h2: base + 'text-3xl my-2 ',
  h3: base + 'text-2xl my-2 ',
  h4: base + 'text-xl my-1 ',
  h5: base + 'text-lg my-1 '
});

exports["default"] = _default;