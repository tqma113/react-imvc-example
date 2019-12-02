"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = View;

var _react = _interopRequireDefault(require("react"));

var _hook = require("react-imvc/hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function View() {
  var _useModel = (0, _hook.useModel)(),
      _useModel2 = _slicedToArray(_useModel, 2),
      state = _useModel2[0],
      actions = _useModel2[1];

  var handleAddClick = function handleAddClick() {
    var INCREASE = actions.INCREASE;
    INCREASE();
  };

  var handleMinusClick = function handleMinusClick() {
    var DECREASE = actions.DECREASE;
    DECREASE();
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, _react["default"].createElement("span", null, _react["default"].createElement("button", {
    onClick: handleMinusClick
  }, "-"), _react["default"].createElement("span", null, state.count), _react["default"].createElement("button", {
    onClick: handleAddClick
  }, "+"))));
}