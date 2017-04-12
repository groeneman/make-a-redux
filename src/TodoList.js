import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Todo({ name, onRemove }) {
  return (<li>{ name } (<em onClick={ onRemove }>Remove</em>)</li>)
}

Todo.propTypes = {
  name: PropTypes.string,
  onRemove: PropTypes.func.isRequired
}

class TodoList extends Component {
  removeTodo(id) {
    this.props.dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => (
            <Todo
              key={ todo.id }
              name={ todo.name }
              onRemove={ this.removeTodo.bind(this, todo.id) }
            />
          ))
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default TodoList;
