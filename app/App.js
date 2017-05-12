import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBorad from './KanbanBoard';

require('./style/app.css');
// var moment = require('moment');

let cardsList = [
  {
    id: 1,
    title: 'Read the Book',
    description: 'I should read the whole book',
    status: 'in-progress',
    tasks: []
  },
  {
    id: 2,
    title: 'Write some code',
    description: 'Code along with the samples in the book',
    status: 'todo',
    tasks: [
      {
        id: 1,
        name: 'ContactList Example',
        done: true
      },
      {
        id: 2,
        name: 'Kanban Example',
        done: true
      },
      {
        id: 3,
        name: 'My own experiments',
        done: true
      }
    ]
  },
];

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<KanbanBorad cards={cardsList}/>, app);
// console.log(moment().format());


// index-es2015.js
// function determineDate() {
//   import('moment')
//     .then(moment => moment().format('YYYY-MM-DD HH:mm:ss'))
//     // .then(str => console.log(str))
//     .then(str => console.log(str))
//     .catch(err => console.log('Failed to load moment', err));
// }
//
// determineDate();
//
//
// // index-es2017.js
// async function determineDate2() {
//   const moment = await import('moment');
//   return moment().format('LLLL');
// }
//
// determineDate2().then(str => console.log(str));