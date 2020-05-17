"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CSS = _interopRequireDefault(require("./CSS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _CSS["default"])({
  row: 'flex flex-wrap -mx2',
  col3: 'w-1/4 p-2',
  col6: 'w-1/2 p-2',
  col9: 'w-3/4 p-2',
  col4: 'w-1/3 p-2',
  col8: 'w-2/3 p-2'
});

exports["default"] = _default;