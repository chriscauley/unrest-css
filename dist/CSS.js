"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssFunc = cssFunc;
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function cssFunc(__base, value) {
  value = (0, _classnames["default"])(__base, value); // TODO using "a, b, c, d, e, f" in place of "...args" here takes this from 1600 to 500 ms per 2M calls
  // maybe there's a faster way to do this?

  function func() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _classnames["default"].apply(void 0, [value].concat(args));
  }

  func.toString = func;
  return func;
}

var _default = function _default(_ref) {
  var _ref$__base = _ref.__base,
      __base = _ref$__base === void 0 ? '' : _ref$__base,
      _ref$__default = _ref.__default,
      __default = _ref$__default === void 0 ? '' : _ref$__default,
      _ref$__aliases = _ref.__aliases,
      __aliases = _ref$__aliases === void 0 ? {} : _ref$__aliases,
      variants = _objectWithoutProperties(_ref, ["__base", "__default", "__aliases"]);

  var root = cssFunc(__base, variants[__default]);
  Object.entries(variants).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return root[key] = cssFunc(__base, value);
  });

  if (!variants.base) {
    root.base = cssFunc(__base, '');
  }

  Object.entries(__aliases).forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        alias = _ref5[0],
        original = _ref5[1];

    return root[alias] = root[original];
  });

  root.has = function (key) {
    return typeof root[key] === 'function';
  };

  root.get = function (key, args) {
    if (root.has(key)) {
      return root[key](args);
    }

    console.warn('CSS library is missing key: ' + key);
    return root(args);
  };

  return root;
};

exports["default"] = _default;