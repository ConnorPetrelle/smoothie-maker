import React, { Component } from 'react';
import { MainPage } from "./MainPage.js";
import { StartButton } from "./StartButton.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.getStarted = this.getStarted.bind(this);
    this.state = { started: false };
  }

  getStarted() {
    this.setState(
      { started: true }
    );

    document.body.style.backgroundColor = "#efefef";
  }

  render() {
    const started = this.state.started;
    return (
            started ? <MainPage/> : <StartButton onClick = {this.getStarted}/>
    );
  }
}

export default App;
