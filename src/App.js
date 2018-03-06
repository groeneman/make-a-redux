import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import AddTodo from './AddTodo.js'

import { dispatch, getState } from './store.js';

class App extends Component {
  dispatch(action) {
    dispatch(action);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TodoList dispatch={this.dispatch.bind(this)} todos={getState()} />
        <AddTodo dispatch={this.dispatch.bind(this)} />
      </div>
    );
  }
}

export default App;
