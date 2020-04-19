"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _variants = _interopRequireDefault(require("./variants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ButtonShowCase = function ButtonShowCase() {
  var wrapper_class = 'p-2';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _index["default"].h3
  }, "Default Buttons"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap"
  }, _variants["default"].map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: wrapper_class,
      key: variant
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: _index["default"].button[variant]()
    }, variant));
  })), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "my-4"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _index["default"].h3
  }, "Disabled Buttons"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap"
  }, _variants["default"].map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: wrapper_class,
      key: variant
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: _index["default"].button[variant]('disabled')
    }, variant));
  })));
};

var AlertShowCase = function AlertShowCase() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _index["default"].h3
  }, "Alerts"), _variants["default"].map(function (variant) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _index["default"].alert[variant]('mb-4'),
      key: variant
    }, "This is an alert with variant ", /*#__PURE__*/_react["default"].createElement("b", null, variant));
  }));
};

var CSSDetails = /*#__PURE__*/function (_React$Component) {
  _inherits(CSSDetails, _React$Component);

  var _super = _createSuper(CSSDetails);

  function CSSDetails() {
    _classCallCheck(this, CSSDetails);

    return _super.apply(this, arguments);
  }

  _createClass(CSSDetails, [{
    key: "render",
    value: function render() {
      var _css$modal = _index["default"].modal,
          outer = _css$modal.outer,
          mask = _css$modal.mask,
          content = _css$modal.content;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: outer
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: mask
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: content
      }, /*#__PURE__*/_react["default"].createElement(ButtonShowCase, null), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "my-8"
      }), /*#__PURE__*/_react["default"].createElement(AlertShowCase, null)));
    }
  }]);

  return CSSDetails;
}(_react["default"].Component);

exports["default"] = CSSDetails;