'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewsList = require('./NewsList');

var _NewsList2 = _interopRequireDefault(_NewsList);

var _NewsImage = require('./NewsImage');

var _NewsImage2 = _interopRequireDefault(_NewsImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by grandkai on 5/14/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NewsDetail = function (_React$Component) {
  _inherits(NewsDetail, _React$Component);

  function NewsDetail() {
    _classCallCheck(this, NewsDetail);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NewsDetail.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'news-detail' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'a',
            { href: this.props.href },
            '\u66F4\u591A>>'
          )
        ),
        _react2.default.createElement(
          'b',
          null,
          this.props.title
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'news-div clearfix' },
        _react2.default.createElement(_NewsImage2.default, this.props.image),
        _react2.default.createElement(_NewsList2.default, { list: this.props.list })
      )
    );
  };

  return NewsDetail;
}(_react2.default.Component);

exports.default = NewsDetail;