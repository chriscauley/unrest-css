"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CSS = _interopRequireDefault(require("./CSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _CSS["default"])({
  outer: 'fixed w-full h-full top-0 left-0 flex items-center justify-center z-10 p-8',
  mask: 'absolute w-full h-full cursor-pointer bg-gray-600 opacity-25',
  content: 'p-4 bg-white w-11/12 md:max-w-xl mx-auto rounded shadow-lg z-50 overflow-y-auto max-h-full'
});

exports["default"] = _default;