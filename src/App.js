import React, { Component } from 'react';
import './App.css';
import Dice from './option-1-export-mapDispatchToProps-and-mapStateToProps/Dice';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Roll the dice</h1>
        <Dice/>
      </div>
    );
  }
}

export default App;
