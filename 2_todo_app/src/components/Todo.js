import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          label: 'Pay Bills',
          mode: 'view',
        },
        {
          label: 'Go Shopping',
          mode: 'edit',
        },
      ]
    }
  }
  
  render() {
    const { list } = this.state;
    // this.state.list != list

    const changeStatus = (i) => {
      list[i].mode = list[i].mode === 'view' ? 'edit' : 'view';
      this.setState({ list })
    }

    return (
      <div>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          {
            list.map((item, i) => {
              return (
                <li className={item.mode === 'edit' ? "editMode" : null}>
                  <input type="checkbox" />
                  <label>{item.label}</label>
                  <input type="text" value={item.label ? item.label : null} />
                  <button class="edit" onClick={() => changeStatus(i)}>Edit</button>
                  <button class="delete">Delete</button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Todo;