(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './resources/style/card.css', './resources/style/style.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./resources/style/card.css'), require('./resources/style/style.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.card, global.style);
    global.Card = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Card = Card;
  exports.renderCard = renderCard;
  function Card(props) {
    return React.createElement(
      'div',
      { className: props[".card-column"] ? props[".card-column"] : "recommend-column clearfix" },
      React.createElement(
        'a',
        { href: props.href },
        React.createElement(
          'div',
          { className: props[".card-img"] ? props[".card-img"] : "column-img" },
          React.createElement('img', { src: props.imageUrl, style: { width: "127px", height: "128px" } })
        ),
        React.createElement(
          'div',
          { className: props[".card-title"] ? props[".card-title"] : "column-text" },
          React.createElement(
            'h1',
            null,
            props.title
          ),
          React.createElement(
            'div',
            { className: props[".card-content"] ? props[".card-content"] : "column-detail" },
            props.content
          )
        )
      )
    );
  }

  function renderCard(props, element) {
    ReactDOM.render(React.createElement(Card, props), element);
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
});
