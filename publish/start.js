"use strict";

var _reactImvc = _interopRequireDefault(require("react-imvc"));

var _imvc = _interopRequireDefault(require("./imvc.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactImvc["default"].start({
  config: _imvc["default"]
});