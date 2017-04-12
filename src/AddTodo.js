import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state.name })
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <input type="text" value={ this.state.name } onChange={ this.onInputChange } />
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default AddTodo;
