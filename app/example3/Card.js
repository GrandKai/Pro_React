/*require('es5-shim');
require('es5-shim/es5-sham');
require('fetch-ie8');*/
/*require('console-polyfill');
require('es6-promise');
require('babel-polyfill');*/

/*import React from 'react';
import ReactDOM from 'react-dom';*/

/*require('./resources/style/card.css');
require('./resources/style/style.css');*/

export function Card(props) {
  return (
    <div className={props[".card-column"] ? props[".card-column"] : "recommend-column clearfix"}>
      <a href={props.href}>
        <div className={props[".card-img"] ? props[".card-img"] : "column-img"}>
          <img src={props.imageUrl} style={{width: "127px", height: "128px"}}/>
        </div>
        <div className={props[".card-title"] ? props[".card-title"] : "column-text"}>
          <h1>{props.title}</h1>
          <div className={props[".card-content"] ? props[".card-content"] : "column-detail"}>
            {props.content}
          </div>
        </div>
      </a>
    </div>
  )
}


export function render(props, element) {
  ReactDOM.render(<Card {...props}/>, element);
}


/*var React = require('react');
var ReactDOM = require('react-dom');

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

function renderCard(entity, element){
  ReactDOM.render(<Card {...entity} />, element);
}*/

/*import React from 'react';
import ReactDOM from 'react-dom';*/


/*const React = require('react');
var ReactDOM = require('react-dom');*/


/*class Card extends React.Component{
  render() {
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
}

function renderCard(entity, element){
  ReactDOM.render(<Card {...entity} />, element);
}*/
