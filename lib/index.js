(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'react-dom', './example3/Card', './resources/style/card.css', './resources/style/style.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('react-dom'), require('./example3/Card'), require('./resources/style/card.css'), require('./resources/style/style.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom, global.Card, global.card, global.style);
    global.index = mod.exports;
  }
})(this, function (_react, _reactDom, _Card) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Card2 = _interopRequireDefault(_Card);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function renderCard(entity, element) {
    _reactDom2.default.render(_react2.default.createElement(_Card2.default, entity), element);
  }
});