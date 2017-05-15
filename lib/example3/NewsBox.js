'use strict';

exports.__esModule = true;
exports.default = NewsBox;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewsDetail = require('./NewsDetail');

var _NewsDetail2 = _interopRequireDefault(_NewsDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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