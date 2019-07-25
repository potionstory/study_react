import React, { Component } from 'react';

class AppChild extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  };
}

export default AppChild;