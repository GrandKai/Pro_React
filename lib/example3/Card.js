"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require('react');

/*require('es5-shim');
require('es5-shim/es5-sham');*/

/*require('fetch-ie8');
require('console-polyfill');
require('es6-promise');
require('babel-polyfill');*/

function Card(props) {
  return _react2.default.createElement(
    "div",
    { className: props[".card-column"] ? props[".card-column"] : "recommend-column clearfix" },
    _react2.default.createElement(
      "a",
      { href: props.href },
      _react2.default.createElement(
        "div",
        { className: props[".card-img"] ? props[".card-img"] : "column-img" },
        _react2.default.createElement("img", { src: props.imageUrl, style: { width: "127px", height: "128px" } })
      ),
      _react2.default.createElement(
        "div",
        { className: props[".card-title"] ? props[".card-title"] : "column-text" },
        _react2.default.createElement(
          "h1",
          null,
          props.title
        ),
        _react2.default.createElement(
          "div",
          { className: props[".card-content"] ? props[".card-content"] : "column-detail" },
          props.content
        )
      )
    )
  );
}
exports.default = Card;