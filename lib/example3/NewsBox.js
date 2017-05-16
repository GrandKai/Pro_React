(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', 'react', './NewsDetail'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('react'), require('./NewsDetail'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.react, global.NewsDetail);
    global.NewsBox = mod.exports;
  }
})(this, function (module, exports, _react, _NewsDetail) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = NewsBox;

  var _react2 = _interopRequireDefault(_react);

  var _NewsDetail2 = _interopRequireDefault(_NewsDetail);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Created by grandkai on 5/14/17.
   */

  function NewsBox(props) {

    console.log(props);
    var box = props.boxs.map(function (item) {

      console.log(item);
      return _react2.default.createElement(_NewsDetail2.default, item);
    });
    return _react2.default.createElement(
      'div',
      { className: 'news-box' },
      box
    );
  }
  module.exports = exports['default'];
});