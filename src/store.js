import reducer from './reducer.js';

let state = reducer({type: 'STORE_INIT'});

export function dispatch(action) {
	state = reducer(action, state)
}

export function getState() {
	return state
}