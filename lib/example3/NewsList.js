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
    global.NewsList = mod.exports;
  }
})(this, function (module, exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = NewsList;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function NewsList(props) {
    console.log("--------------", props);
    var list = props.list.map(function (item, index, origin) {
      return _react2.default.createElement(
        "li",
        { key: item.id, className: index === 0 ? "first" : "" },
        _react2.default.createElement(
          "a",
          { href: item.href, target: "_blank" },
          _react2.default.createElement(
            "span",
            { className: "time" },
            "05-12"
          ),
          _react2.default.createElement(
            "span",
            { className: "cc", title: item.title },
            item.title
          )
        )
      );
    });

    return _react2.default.createElement(
      "div",
      { className: "news-list" },
      _react2.default.createElement(
        "ul",
        null,
        list
      )
    );
  } /**
     * Created by zhangyn on 17-5-12.
     */
  module.exports = exports["default"];
});