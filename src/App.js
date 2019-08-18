import React, { Component } from 'react';
import AppChild from './AppChild';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      age: 0,
      member:[
        {
          name1: "이철근",
          age1: 36
        }
      ]
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleCreate = () => {
    this.setState({
      member: [
        {
          name1: this.state.name,
          age1: this.state.age
        },
        ...this.state.member
      ]
    });
  };

  render() {
    return (
      <>
        <label htmlFor="id_name">이름</label>
        <input type="text" id="id_name" name="name" onChange={this.handleChange} />
        <br />
        <label htmlFor="id_age">나이</label>
        <input type="text" id="id_age" name="age" onChange={this.handleChange} />
        <br />
        <button type="button" onClick={this.handleCreate}>입력</button>
        <div>
          {this.state.name}
          {this.state.age}
          {this.state.member.map(v => {
            return (
              <div key={v.name1}>
                <span>{v.name1}</span>
                <span>{v.age1}</span>
              </div>
            )
          })}
        </div>
      </>
    );
  };
}

export default App;
