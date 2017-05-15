'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  // 验证不同类型的 JavaScript 变量
  optionalArray: _react.PropTypes.array,
  optionalBool: _react.PropTypes.bool,
  optionalFunc: _react.PropTypes.func,
  optionalNumber: _react.PropTypes.number,
  optionalObject: _react.PropTypes.object,
  optionalString: _react.PropTypes.string,

  // 可以是一个 ReactElement 类型
  optionalElement: _react.PropTypes.element,

  // 可以是某个组件的实例
  optionalMessage: _react.PropTypes.instanceOf(Message),

  // 可以是一组值中其中的一个
  optionalEmun: _react.PropTypes.oneOf(['News', 'Photos']),

  // 可以是一组类型中的一个
  optionalUnion: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string, _react.PropTypes.instanceOf(Message)]),

  // 可以在最后加一个 isRequired，表明这个属性是必须的，否则会返回一个错误
  requiredFunc: _react.PropTypes.func.isRequired
};

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Profile.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'profile-component' },
      _react2.default.createElement(
        'h1',
        null,
        'my name is ',
        this.props.name
      ),
      _react2.default.createElement(
        'h2',
        null,
        'my age is ',
        this.props.age
      )
    );
  };

  return Profile;
}(_react2.default.Component);

Profile.propTypes = propTypes;

exports.default = Profile;