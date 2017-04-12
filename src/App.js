import React, { Component } from 'react';
import './App.css';
import Connector from './Connector.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Connector />
      </div>
    );
  }
}

export default App;
