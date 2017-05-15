'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.createElement('div');
document.body.appendChild(app);

_reactDom2.default.render(_react2.default.createElement(
  _antd.Card,
  { style: { width: 480 }, bodyStyle: { padding: 0 } },
  _react2.default.createElement(
    'div',
    { className: 'custom-image' },
    _react2.default.createElement('img', { alt: 'example', width: '100%', src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' })
  ),
  _react2.default.createElement(
    'div',
    { className: 'custom-card' },
    _react2.default.createElement(
      'h3',
      null,
      'Europe Street beat'
    ),
    _react2.default.createElement(
      'p',
      null,
      'www.instagram.com'
    )
  )
), app);