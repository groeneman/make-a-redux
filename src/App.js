import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TodoList todos={ [{ id: 1, name: 'Make a redux clone' }] } />
      </div>
    );
  }
}

export default App;
