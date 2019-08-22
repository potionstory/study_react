import React, { Component } from 'react';
import PotionApp from './PotionApp';
import LkelApp from './LkelApp';
import MiniApp from './MiniApp';

class App extends Component {

  state = {
    user: 1,
  };

  render() {

    let component;
    if(this.state.user === 1){
      component = <PotionApp />;
    } else if (this.state.user === 2) {
      component = <LkelApp />;
    } else {
      component = <MiniApp />;
    }

    return (
      <div>
        {component}
      </div>
    );
  }
}

export default App;