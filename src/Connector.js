import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js'
import AddTodo from './AddTodo.js'
import createStore from './createStore.js'
import reducer from './reducer.js'

class Connector extends Component {
  constructor(props) {
    super(props)
    this.store = createStore(reducer)
    this.dispatch = this.dispatch.bind(this)
  }

  dispatch(action) {
    this.store.dispatch(action)
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <TodoList todos={ this.store.getState() } dispatch={ this.dispatch } />
        <AddTodo dispatch={ this.dispatch }/>
      </div>
    );
  }
}

export default Connector;
