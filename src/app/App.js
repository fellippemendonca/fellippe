import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Spacer"/>
        <div className="App-header">
          <h1>Hi, I'm Fellippe!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>It's {new Date().toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }
}

export default App;
