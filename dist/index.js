"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _alert = _interopRequireDefault(require("./alert"));

var _badge = _interopRequireDefault(require("./badge"));

var _button = _interopRequireDefault(require("./button"));

var _card = _interopRequireDefault(require("./card"));

var _grid = _interopRequireDefault(require("./grid"));

var _hx = _interopRequireDefault(require("./hx"));

var _icon = _interopRequireDefault(require("./icon"));

var _modal = _interopRequireDefault(require("./modal"));

var _CSS = _interopRequireWildcard(require("./CSS"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nav = (0, _CSS["default"])({
  outer: "navbar",
  section: "navbar-section",
  brand: "navbar-brand"
});
var list = (0, _CSS["default"])({
  outer: 'list-group',
  item: 'list-group-item',
  action: 'list-group-item list-group-item-action'
});
var dropdown = (0, _CSS["default"])({
  outer: 'dropdown',
  menu: 'dropdown-menu',
  toggle: 'dropdown-toggle',
  item: 'dropdown-item'
});

var _default = _objectSpread({
  nav: nav,
  footer: (0, _CSS.cssFunc)('ur-footer'),
  alert: _alert["default"],
  dropdown: dropdown,
  button: _button["default"],
  list: list,
  badge: _badge["default"],
  card: _card["default"]
}, _hx["default"], {
  icon: _icon["default"],
  link: (0, _CSS.cssFunc)('text-blue-500 cursor-pointer'),
  modal: _modal["default"],
  CSS: _CSS["default"],
  cssFunc: _CSS.cssFunc,
  grid: _grid["default"]
});

exports["default"] = _default;