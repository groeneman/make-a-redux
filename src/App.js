import React, { Component } from 'react';
import './App.css';
import Connector from './Connector.js'
import TodoList from './TodoList.js'
import AddTodo from './AddTodo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <TodoList todos={ this.props.getState() } dispatch={ this.props.dispatch } />
        <AddTodo dispatch={ this.props.dispatch }/>
      </div>
    );
  }
}

export default Connector(App);
