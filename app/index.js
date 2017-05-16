import React from 'react';
import ReactDOM from 'react-dom';
import Card from './example3/Card';

require('./resources/style/card.css');
require('./resources/style/style.css');

function renderCard(entity, element){
  ReactDOM.render(<Card {...entity} />, element);
}
