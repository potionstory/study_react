import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          <li>
            <input type="checkbox" />
            <label>Pay Bills</label>
            <input type="text" />
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </li>
          <li class="editMode">
            <input type="checkbox" />
            <label>Go Shopping</label>
            <input type="text" value="Go Shopping" />
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Todo;