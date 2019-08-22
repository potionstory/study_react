import React, { Component } from 'react';
import AppChild from './AppChild';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      age: 0,
      member:[]
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
      count: ++this.state.count,
      member: [
        ...this.state.member,
        {
          id: this.state.count,
          name: this.state.name,
          age: this.state.age
        }
      ]
    });
  };

  handleRemove = (i) => {
    this.setState({
      member: [
        ...this.state.member.slice(0, i),
        ...this.state.member.slice(i + 1, this.state.member.length)
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
          {this.state.member.map((v, i) => {
            return (
              <div key={v.id}>
                <span>{v.name}</span>
                <span>{v.age}</span>
                <button type="button" onClick={() => this.handleRemove(i)}>삭제</button>
              </div>
            )
          })}
        </div>
      </>
    );
  };
}

export default App;
