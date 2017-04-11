import React, { PropTypes } from 'react';

const propTypes = {
  // 验证不同类型的 JavaScript 变量
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,

  // 可以是一个 ReactElement 类型
  optionalElement: PropTypes.element,

  // 可以是某个组件的实例
  optionalMessage: PropTypes.instanceOf(Message),

  // 可以是一组值中其中的一个
  optionalEmun: PropTypes.oneOf(['News', 'Photos']),

  // 可以是一组类型中的一个
  optionalUnion: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.instanceOf(Message)
  ]),

  // 可以在最后加一个 isRequired，表明这个属性是必须的，否则会返回一个错误
  requiredFunc: PropTypes.func.isRequired
};

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-component">
        {/* this.pros 是传入的属性 */}
        <h1>my name is { this.props.name }</h1>
        <h2>my age is { this.props.age }</h2>
      </div>
    );
  }
}

Profile.propTypes = propTypes;

export default Profile;

