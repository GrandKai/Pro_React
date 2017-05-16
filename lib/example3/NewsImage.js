(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.react);
    global.NewsImage = mod.exports;
  }
})(this, function (module, exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = NewsImage;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
  module.exports = exports["default"];
});