import React, { Component } from 'react';

export default class CheckList extends Component {
  render() {
    const tasks = this.props.tasks.map((task) => {
      return (
        <li className="checklist_task" key={task.id}>
          <input type="checkbox" defaultChecked={task.done} />
          { task.name }
          <a href="#" className="checklist__task--remove" />
        </li>);
    });

    return (
      <div className="checklist">
        <ul>{ tasks }</ul>
      </div>
    );
  }
}
