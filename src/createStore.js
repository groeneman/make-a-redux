export default (reducer) => {
  let state = reducer({ type: 'STORE_INIT', payload: null }, null)

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(action, state)
  }

  return { getState, dispatch }
}
