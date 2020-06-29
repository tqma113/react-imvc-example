"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;

var _react = _interopRequireDefault(require("react"));

var _Script = _interopRequireDefault(require("react-imvc/component/Script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Page(props) {
  return /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    content: "yes",
    name: "apple-mobile-web-app-capable"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    content: "black",
    name: "apple-mobile-web-app-status-bar-style"
  }), /*#__PURE__*/_react["default"].createElement("title", null, props.title), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "description",
    content: props.description
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "keywords",
    content: props.keywords
  })), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("div", {
    id: "root",
    dangerouslySetInnerHTML: {
      __html: props.content
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal"
  }), /*#__PURE__*/_react["default"].createElement(_Script["default"], null, "\n          (function() {\n              window.__INITIAL_STATE__ = ".concat(JSON.stringify(props.initialState), "\n              window.__APP_SETTINGS__ = ").concat(JSON.stringify(props.appSettings), "\n              window.__PUBLIC_PATH__ = '").concat(props.publicPath, "'\n          })()\n         ")), /*#__PURE__*/_react["default"].createElement("script", {
    src: "".concat(props.publicPath, "/").concat(props.assets.vendor)
  }), /*#__PURE__*/_react["default"].createElement("script", {
    src: "".concat(props.publicPath, "/").concat(props.assets.index)
  })));
}