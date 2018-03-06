import React from 'react';
import './App.css';

const Connector = (Component, store) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.store = store
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
