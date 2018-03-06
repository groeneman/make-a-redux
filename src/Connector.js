import React from 'react';
import './App.css';
import createStore from './createStore.js'
import reducer from './reducer.js'

const Connector = (Component) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.store = createStore(reducer)
      this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
      this.store.dispatch(action);
      this.forceUpdate();
    }

    render() {
      return <Component dispatch={ this.dispatch } getState={ this.store.getState } { ...this.props } />;
    }
  }
}

export default Connector;
