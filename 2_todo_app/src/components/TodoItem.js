import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <p>
        <label for="new-task">Add Item</label>
        <input id="new-task" type="text"/>
        <button>Add</button>
      </p>
    );
  }
}

export default TodoItem;