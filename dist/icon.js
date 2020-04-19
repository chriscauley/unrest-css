"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var icon = function icon(slug, extra) {
  return (0, _classnames["default"])('fa fa-' + slug, extra);
}; // useful for making a lot of icons with similar styles


icon.makeSet = function (icons, extra) {
  var icon_set = {};
  icons.forEach(function (slug) {
    return icon_set[slug] = icon(slug, extra);
  });
  return icon_set;
};

var _default = icon;
exports["default"] = _default;