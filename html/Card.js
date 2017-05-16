var React = require('react');

/*require('es5-shim');
require('es5-shim/es5-sham');
require('fetch-ie8');
require('console-polyfill');
require('es6-promise');
require('babel-polyfill');*/

var Card = React.createClass({
  render: function() {
    return (
      <div className={this.props[".card-column"] ? this.props[".card-column"]: "recommend-column clearfix"} >
        <a href={this.props.href}>
          <div className={this.props[".card-img"] ? this.props[".card-img"] : "column-img"}>
            <img src={this.props.imageUrl} style={{width: "127px", height: "128px"}} />
          </div>
          <div className={this.props[".card-title"] ? this.props[".card-title"] : "column-text"}>
            <h1>{this.props.title}</h1>
            <div className={this.props[".card-content"] ? this.props[".card-content"] : "column-detail"}>
              {this.props.content}
            </div>
          </div>
        </a>
      </div>
    )
  }
});
