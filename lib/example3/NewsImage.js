"use strict";

exports.__esModule = true;
exports.default = NewsImage;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewsImage(props) {

  return _react2.default.createElement(
    "div",
    { className: "news-img" },
    _react2.default.createElement(
      "a",
      { href: props.href, target: "_blank" },
      _react2.default.createElement("img", { src: props.imageSrc, style: { width: "245px", height: "158px" } })
    )
  );
} /**
   * Created by grandkai on 5/14/17.
   */