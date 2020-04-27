"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
var __aliases = {
  warn: 'warning',
  error: 'danger'
};

variants.make = function (f) {
  var result = {
    __aliases: __aliases
  };
  variants.map(function (variant) {
    return result[variant] = f(variant);
  });
  return result;
};

var _default = variants;
exports["default"] = _default;